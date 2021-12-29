const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = require('electron-is-dev');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    });

    // Open the DevTools.
    if (isDev) {
        win.webContents.openDevTools({ mode: 'right' });
    }

    win.loadFile("dist/index.html");
}

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on("window-all-closed", () => {
    // Quit when all windows are closed, except on macOS. It's common
    // for macOS apps to stay active until the user explicitly quits them.
    if (process.platform !== "darwin") {
        app.quit();
    }
});