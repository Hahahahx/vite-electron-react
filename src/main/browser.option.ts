import { isDev } from "@common/utils";
import * as path from "path";
import * as url from "url";

const devWid = isDev ? 1000 : 0;
const devHei = isDev ? 600 : 0;

// 底部icon：40*40
const editorWindowOptions = {
  width: devWid || 290,
  height: devHei || 350,
  minWidth: 250,
};

/**
 * BrowserWindow的配置项
 * @param type 单独给编辑窗口的配置
 */
const browserWindowOption = (
  type?: "editor"
): Electron.BrowserWindowConstructorOptions => {
  const commonOptions: Electron.BrowserWindowConstructorOptions = {
    minHeight: 48,
    frame: false,
    hasShadow: true,
    transparent: true,
    webPreferences: {
      enableRemoteModule: true,
      nodeIntegrationInSubFrames: true,
      nodeIntegrationInWorker: true,
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false,
    },
    autoHideMenuBar: true,
    icon: path.join(__dirname, "../assets/img/icon.png"),
  };

  if (process.platform === "darwin") {
    commonOptions.frame = true;
    commonOptions.transparent = false;
    commonOptions.backgroundColor = "#ffffff";
  }

  if (!type) {
    return {
      width: devWid || 1000,
      height: devHei || 600,
      minWidth: 1000,
      ...commonOptions,
    };
  }

  return {
    ...editorWindowOptions,
    ...commonOptions,
  };
};

const winURL = isDev ? "http://localhost:3000" : `app://./index.html`;

// url
//   .pathToFileURL(
//     path.join(
//       __dirname,
//       path.basename(__dirname) === "renderer"
//         ? "./index.html"
//         : "./renderer/index.html"
//     )
//   )
//   .toString();

export { browserWindowOption, winURL };
