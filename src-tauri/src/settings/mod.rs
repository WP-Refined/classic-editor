pub mod models;

use dotenv_codegen::dotenv;
use models::Setting;
use rusqlite::{Connection, Result};
use serde_json::json;

fn get_db_connection() -> Result<Connection> {
  let conn = Connection::open(dotenv!("DATABASE_URL"))?;
  Ok(conn)
}

pub fn initialise_database() -> Result<()> {
  let conn = get_db_connection()?;

  conn.execute(
    "CREATE TABLE IF NOT EXISTS settings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      key VARCHAR(255) UNIQUE NOT NULL,
      value VARCHAR(500) NOT NULL DEFAULT ''
    );",
    [],
  )?;

  let mut insert = conn.prepare("INSERT OR IGNORE INTO settings (key, value) VALUES (?, ?)")?;
  insert.execute(["api_key", dotenv!("DEMO_API_KEY")])?;
  insert.execute(["api_user", dotenv!("DEMO_API_USER")])?;
  insert.execute(["api_url", dotenv!("DEMO_API_URL")])?;

  Ok(())
}

pub fn get_settings() -> Result<Vec<Setting>> {
  let conn = get_db_connection()?;
  let mut stmt = conn.prepare("SELECT id, key, value FROM settings;")?;
  let settings_iter = stmt.query_map([], |row| {
    Ok(Setting {
      key: row.get(1)?,
      value: row.get(2)?,
    })
  })?;

  let mut payload: Vec<crate::settings::models::Setting> = Vec::new();
  for setting in settings_iter {
    payload.push(setting.unwrap());
  }
  Ok(payload)
}

pub fn get_settings_json() -> String {
  match get_settings() {
    Ok(settings) => json!(settings).to_string(),
    Err(_) => panic!("Unable to retrieve any application settings"),
  }
}
