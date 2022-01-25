use serde::Serialize;

#[derive(Debug, Serialize)]
pub struct Setting {
  pub key: String,
  pub value: String,
}
