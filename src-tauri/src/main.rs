#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

extern crate dotenv_codegen;

use dotenv_codegen::dotenv;
use rusqlite::{Connection, Result};
use serde::Serialize;
use serde_json::json;
use tauri::Manager;

#[derive(Debug, Serialize)]
struct Setting {
  key: String,
  value: String,
}

#[derive(Clone, Serialize)]
struct StatePayload {
  data: String,
}

fn main() {
  tauri::Builder::default()
    .setup(|app| {
      // listen to the `update-state` event (emitted on any window)
      // app.listen_global("update-state", |event| {
      //   println!("got update-state with payload {:?}", event.payload());
      // });

      // retrieve a JSON string containing all settings
      let settings: String = retrieve_settings();

      // provide webview with the current state
      app
        .emit_all("state", StatePayload { data: settings })
        .unwrap();

      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("Error while running application");
}

fn intialise_settings() -> Result<Vec<Setting>> {
  let conn = Connection::open(dotenv!("DATABASE_URL"))?;

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

  let mut stmt = conn.prepare("SELECT id, key, value FROM settings;")?;
  let settings_iter = stmt.query_map([], |row| {
    Ok(Setting {
      key: row.get(1)?,
      value: row.get(2)?,
    })
  })?;

  let mut payload: Vec<Setting> = Vec::new();
  for setting in settings_iter {
    payload.push(setting.unwrap());
  }
  Ok(payload)
}

fn retrieve_settings() -> String {
  match intialise_settings() {
    Ok(settings) => json!(settings).to_string(),
    Err(_) => panic!("Unable to intialise application settings"),
  }
}
