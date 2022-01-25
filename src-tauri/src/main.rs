#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

extern crate dotenv_codegen;

use serde::Serialize;
use tauri::Manager;

mod settings;

#[derive(Clone, Serialize)]
struct StatePayload {
  data: String,
}

fn main() {
  tauri::Builder::default()
    .setup(|app| {
      settings::initialise_database().unwrap();

      // listen to the `update-state` event (emitted on any window)
      // app.listen_global("update-state", |event| {
      //   println!("got update-state with payload {:?}", event.payload());
      // });

      // retrieve a JSON string containing all settings
      let settings: String = settings::get_settings_json();

      // provide webview with the current state
      app
        .emit_all("state", StatePayload { data: settings })
        .unwrap();

      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("Error while running application");
}
