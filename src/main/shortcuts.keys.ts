import { globalShortcut } from "electron";

const globalEnv = process.env.NODE_ENV;
const isDev = globalEnv === "development";
/**
 * 主要禁用
 * - F11 禁用全屏放大
 * - CTRL+R 禁用刷新
 * - CTRL+SHIFT+R 禁用刷新
 */
const devShortcuts = ["F11", "Ctrl+R", "Ctrl+Shift+R"];

const shortcuts = ["Ctrl+N", "Shift+F10", "Ctrl+Shift+I"];

const shortcutsKeys = isDev ? shortcuts : [...devShortcuts, ...shortcuts];

const disableShortcuts = () => {
  // 快捷键禁用
  for (const key of shortcutsKeys) {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    globalShortcut.register(key, () => {});
  }
};

export { shortcutsKeys, disableShortcuts };
