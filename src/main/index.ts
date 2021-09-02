import { app, BrowserWindow, ipcMain, protocol } from "electron";
import { isDev } from "@common/utils";
import { browserWindowOption, winURL } from "./browser.option";
import { createPortal } from "./createProtal";
import { disableShortcuts } from "./shortcuts.keys";
import { IpcEvent } from "@common/ipcEvent";
let win: BrowserWindow | null;

protocol.registerSchemesAsPrivileged([
  {
    scheme: "app",
    privileges: {
      secure: true,
      standard: true,
    },
  },
]);

function createWindow() {
  const bwopt = browserWindowOption();
  win = new BrowserWindow(bwopt);
  if (isDev) {
    win.webContents.toggleDevTools();
  } else {
    createPortal("app");
  }
  win.webContents.toggleDevTools();

  win.loadURL(winURL);

  win.on("close", () => {
    win = null;
  });
}

app.whenReady().then(async () => {
  disableShortcuts();
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    disableShortcuts();
    createWindow();
  }
});

if (isDev) {
  if (process.platform === "win32") {
    process.on("message", (data) => {
      if (data === "graceful-exit") {
        app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      app.quit();
    });
  }
}

ipcMain.on(IpcEvent.CreateWindow, (sys, value) => {
  let childrenWindow: BrowserWindow | null;
  childrenWindow = new BrowserWindow(value);
  if (isDev) {
    console.log("open devtools");
    childrenWindow?.webContents.openDevTools();
  }
  childrenWindow?.webContents.loadURL(`${winURL}/#login`);
  childrenWindow?.on("close", () => {
    childrenWindow = null;
  });
});
