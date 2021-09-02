import { browserWindowOption, winURL } from "@main/browser.option";
import { BrowserWindow, remote, ipcRenderer } from "electron";
// const { remote } = require("electron");
import path from "path";
import { IpcEvent } from "./ipcEvent";
// const path = require("path");

import { isDev } from "./utils";

export const testNode = () => {
  console.log(path.join("asd"));
  console.log(__dirname);
  createBrowserWindow(undefined, "/login");
};

// 创建窗口
export const createBrowserWindow = (bwopt = {}, url = "/", devTools = true) => {
  // ipcRenderer.send(IpcEvent.CreateWindow, {
  //   ...browserWindowOption(),
  //   ...bwopt,
  // });

  let childrenWindow: BrowserWindow | null;

  childrenWindow = new remote.BrowserWindow({
    ...browserWindowOption(),
    ...bwopt,
  });

  if (isDev && devTools) {
    console.log("open devtools");
    childrenWindow?.webContents.openDevTools();
  }
  childrenWindow?.webContents.loadURL(`${winURL}/#main`); 

  childrenWindow?.on("close", () => {
    childrenWindow = null;
  });

  return childrenWindow;
};

// 过渡关闭窗口
export const transitCloseWindow = (): void => {
  document.querySelector("#app")?.classList.remove("app-show");
  document.querySelector("#app")?.classList.add("app-hide");
  remote.getCurrentWindow().close();
};
