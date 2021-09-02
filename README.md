# ⚡️ vite electron

Electron 初始项目，使用 tsc 或 esbuild 构建主进程，使用 vite 构建渲染进程

使用 Antd 的 React demo (已配置自动样式引入, vite 默认支持按需加载)

注意: CSC_IDENTITY_AUTO_DISCOVERY 默认设置为 false 以避免在打包 macos 的 codesign 操作 (详见 [codesign](https://www.electron.build/code-signing))

## 使用

项目创建:

- 直接 clone 该项目

安装依赖

```shell
yarn
```

启动本地调试

```shell
# 使用 esbuild 来编译主进程 Typescript，速度更佳
yarn run dev

编译/打包

```shell
# 仅构建主进程和渲染进程的目标代码和资源，不打包（exe, dmg 等）
yarn run build

# 在 build 的基础上运行/预览运行效果 (production 模式)，用来本地验证
yarn run preview

# 构建并打包为可运行的程序或安装程序
yarn run pack:win
yarn run pack:mac
yarn run pack:linux

# 为所有平台打包
yarn run pack # 排除 mac 平台，适用于 linux & win
yarn run pack:all
```

清理构建目录

```shell
yarn run clean
```
