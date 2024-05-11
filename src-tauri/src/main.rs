// Prevents additional console window on Windows in release, DO NOT REMOVE!!
// 关闭构建好的应用在 Windows 上运行时一般会出现的控制台窗口。 若您是 Windows 用户，您可以试试去掉这行看看会发生什么。
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}
// println!("Message from  Rust: {}", msg);
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
