import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { AutoRouterVitePlugin } from "ux-autoroute-plugin";
import * as path from "path";
import commonjsExternals from "vite-plugin-commonjs-externals";
import builtinModules from "builtin-modules";
import vitePluginImp from "vite-plugin-imp";

const rendererPath = path.resolve(__dirname, "./src/renderer");
const outDirRenderer = path.resolve(__dirname, "./app/renderer");

const commonjsPackages = [
  "electron",
  "electron/main",
  "electron/common",
  "electron/renderer",
  "original-fs",
  ...builtinModules,
  // ...Object.keys(pkg.dependencies).map(
  //   (name) => new RegExp("^" + escapeRegExp(name) + "(\\/.+)?$")
  // ),
] as const;

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: rendererPath,
  plugins: [
    reactRefresh(),
    AutoRouterVitePlugin({
      pagePath: path.join(rendererPath, "pages"),
      output: rendererPath,
      filename: "router.ts",
    }),
    commonjsExternals({
      externals: commonjsPackages,
    }),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/lib/${name}/style/index.css`,
        },
      ],
    }),
  ],
  // base: "/",
  root: rendererPath,
  build: {
    outDir: outDirRenderer,
    emptyOutDir: true,
    rollupOptions: {
      external: ["electron"],
    },
  },
  resolve: {
    alias: [
      {
        find: "@main",
        replacement: path.resolve(__dirname, "src/main"),
      },
      {
        find: "@renderer",
        replacement: path.resolve(__dirname, "src/renderer"),
      },
      {
        find: "@common",
        replacement: path.resolve(__dirname, "src/common"),
      },
      {
        find: "@config",
        replacement: path.resolve(__dirname, "src/config"),
      },
    ],
  },
});
