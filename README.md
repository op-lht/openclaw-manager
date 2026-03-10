# 🦞 虾池子 (OpenClaw Manager)

高性能跨平台 AI 助手管理工具，基于 **Tauri 2.0 + React + TypeScript + Rust** 构建。

[English](README_EN.md)

![Platform](https://img.shields.io/badge/platform-macOS%20|%20Windows%20|%20Linux-blue)
![Tauri](https://img.shields.io/badge/Tauri-2.0-orange)
![React](https://img.shields.io/badge/React-18-61DAFB)
![Rust](https://img.shields.io/badge/Rust-1.70+-red)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 📸 界面预览

### 📊 仪表盘概览

实时监控服务状态，一键管理 AI 助手服务。

![仪表盘](pic/dashboard.png)

- 服务状态实时监控（端口、进程 ID、内存、运行时间）
- 快捷操作：启动 / 停止 / 重启 / 诊断
- 实时日志查看，支持自动刷新

---

### 🤖 AI 模型配置

灵活配置多个 AI 提供商，支持自定义 API 地址。

![AI 配置](pic/ai.png)

- 支持 14+ AI 提供商（Anthropic、OpenAI、DeepSeek、Moonshot、Gemini 等）
- 自定义 API 端点，兼容 OpenAI 格式的第三方服务
- 一键设置主模型，快速切换

---

### 📱 消息渠道配置

连接多种即时通讯平台，打造全渠道 AI 助手。

<table>
  <tr>
    <td width="50%">
      <img src="pic/telegram.png" alt="Telegram 配置">
      <p align="center"><b>Telegram Bot</b></p>
    </td>
    <td width="50%">
      <img src="pic/feishu.png" alt="飞书配置">
      <p align="center"><b>飞书机器人</b></p>
    </td>
  </tr>
</table>

- **Telegram** — Bot Token 配置、私聊/群组策略
- **飞书** — App ID/Secret、WebSocket 连接、多部署区域
- **更多渠道** — Discord、Slack、WhatsApp、iMessage、微信、钉钉、QQ
- **配置说明** — 每个渠道提供官方文档链接，一键跳转配置指南

---

### 🤝 Agent 管理

多智能体管理，为不同角色分配独立身份、模型与渠道。

![Agent 管理](pic/agents.png)

- 创建和管理多个虚拟员工（Agent），支持自定义名称、Emoji 标识和角色描述
- 每个 Agent 可独立配置 AI 模型、绑定消息渠道、设置工具权限
- 支持沙箱模式、工作空间隔离、@提及模式和子代理权限控制
- 一键设置主 Agent，处理未绑定渠道的消息

---

### 🧩 技能库

统一管理内置、官方、社区与自定义技能插件。

![技能库](pic/skills.png)

- 浏览并搜索所有技能，按来源分类筛选（内置 / 官方 / 社区）
- 一键安装、卸载、启用、禁用技能
- 可视化配置每个技能的参数（文本、密码、下拉选择、开关）
- 支持通过 npm 包或本地路径自定义安装第三方技能

---

### 🛡️ 安全防护

全面的安全风险检测与一键修复功能。

- **安全警告提醒** — 醒目的风险提示，提醒 AI 过强权限可能导致的文件丢失、邮件误发、数据泄露等风险
- **一键安全扫描** — 自动检测 IP 地址暴露、端口绑定、Gateway Token、技能库权限、配置文件权限等
- **风险分级展示** — 高/中/低风险排序，复选框列表展示，可修复项勾选
- **一键修复** — 自动修复可处理的安全问题，不可修复项提供详细的手动操作指南

---

### 🎨 界面主题

支持亮色/暗色双主题切换，默认亮色模式。

- **亮色模式** — Apple 风格柔白设计，清新舒适
- **暗色模式** — 深色主题，护眼适合长时间使用
- **一键切换** — 顶部导航栏 🌙/☀️ 按钮
- **状态持久化** — 刷新或重启后自动恢复上次主题选择

---

## ✨ 功能特性

| 模块 | 功能 |
|------|------|
| 📊 **仪表盘** | 实时服务状态监控、进程内存统计、一键启动/停止/重启 |
| 🤖 **AI 配置** | 14+ AI 提供商、自定义 API 地址、模型快速切换 |
| 📱 **消息渠道** | Telegram、Discord、Slack、飞书、微信、iMessage、钉钉、QQ，每个渠道附配置说明文档 |
| 🤝 **Agent 管理** | 多智能体管理、角色分工、模型覆盖、渠道绑定、沙箱隔离 |
| 🧩 **技能库** | 技能搜索与分类、安装/卸载/启用/禁用、可视化配置、自定义安装 |
| 🛡️ **安全防护** | IP 暴露检测、端口安全、Token 认证、技能权限扫描、一键修复 |
| ⚡ **服务管理** | 后台服务控制、实时日志、开机自启 |
| 🧪 **测试诊断** | 系统环境检查、AI 连接测试、渠道连通性测试 |
| 🎨 **主题切换** | 亮色 / 暗色双主题，持久化保存 |

## 🚀 快速开始

### 方式一：直接下载安装

从 GitHub Releases 下载对应平台的安装包，无需配置开发环境。

👉 **[下载最新版本](https://github.com/VillageMoonlight/openclaw-manager/releases/latest)**

| 平台 | 安装包格式 | 安装方式 |
|------|-----------|---------|
| **macOS** | `.dmg` | 双击打开，拖入 Applications 文件夹 |
| **Windows** | `.msi` / `.exe` | 双击运行安装向导 |
| **Linux** | `.deb` / `.AppImage` | `sudo dpkg -i *.deb` 或直接运行 AppImage |

> ⚠️ **macOS 用户提示**：首次打开如遇 "已损坏" 提示，请参考下方 [macOS 常见问题](#-macos-常见问题)。

---

### 方式二：自行编译运行

#### 环境要求

- **Node.js** >= 18.0
- **Rust** >= 1.70
- **npm** 或 pnpm

#### 平台额外依赖

<details>
<summary><b>macOS</b></summary>

```bash
xcode-select --install
```
</details>

<details>
<summary><b>Windows</b></summary>

- [Microsoft C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/)
- [WebView2](https://developer.microsoft.com/en-us/microsoft-edge/webview2/)
</details>

<details>
<summary><b>Linux (Ubuntu/Debian)</b></summary>

```bash
sudo apt update
sudo apt install libwebkit2gtk-4.1-dev build-essential curl wget file \
  libxdo-dev libssl-dev libayatana-appindicator3-dev librsvg2-dev \
  libgtk-3-dev libsoup-3.0-dev libjavascriptcoregtk-4.1-dev
```
</details>

#### 安装与运行

```bash
# 克隆项目
git clone https://github.com/VillageMoonlight/openclaw-manager.git
cd openclaw-manager

# 安装依赖
npm install

# 开发模式运行（热重载）
npm run tauri dev

# 构建发布版本
npm run tauri build
```

#### 构建产物

运行 `npm run tauri build` 后，安装包生成在 `src-tauri/target/release/bundle/`：

| 平台 | 格式 |
|------|------|
| macOS | `.dmg`, `.app` |
| Windows | `.msi`, `.exe` |
| Linux | `.deb`, `.AppImage` |

## 🍎 macOS 常见问题

### "已损坏，无法打开" 错误

macOS 的 Gatekeeper 安全机制可能会阻止运行未签名的应用。解决方法：

**方法一：移除隔离属性（推荐）**

```bash
xattr -cr /Applications/OpenClaw\ Manager.app
```

**方法二：通过系统偏好设置允许**

打开 **系统偏好设置** > **隐私与安全性**，在 "安全性" 部分找到被阻止的应用，点击 **仍要打开**。

## 📁 项目结构

```
openclaw-manager/
├── src-tauri/                 # Rust 后端
│   ├── src/
│   │   ├── main.rs            # 入口
│   │   ├── commands/          # Tauri Commands
│   │   │   ├── service.rs     # 服务管理
│   │   │   ├── config.rs      # 配置管理
│   │   │   ├── process.rs     # 进程管理
│   │   │   └── diagnostics.rs # 诊断 + 安全扫描
│   │   ├── models/            # 数据模型
│   │   └── utils/             # 工具函数
│   ├── Cargo.toml
│   └── tauri.conf.json
│
├── src/                       # React 前端
│   ├── App.tsx
│   ├── lib/
│   │   └── ThemeContext.tsx    # 主题切换
│   ├── components/
│   │   ├── Layout/            # 布局（Sidebar + Header）
│   │   ├── Dashboard/         # 仪表盘
│   │   ├── AIConfig/          # AI 配置
│   │   ├── Channels/          # 渠道配置
│   │   ├── Agents/            # Agent 管理
│   │   ├── Skills/            # 技能库
│   │   ├── Security/          # 安全防护
│   │   ├── Testing/           # 测试诊断
│   │   ├── Logs/              # 应用日志
│   │   └── Settings/          # 设置
│   └── styles/
│       └── globals.css        # 主题变量 + 全局样式
│
├── package.json
├── vite.config.ts
└── tailwind.config.js
```

## 🛠️ 技术栈

| 层级 | 技术 | 说明 |
|------|------|------|
| 前端框架 | React 18 | 用户界面 |
| 样式 | TailwindCSS + CSS 变量 | 主题切换 + 原子化 CSS |
| 动画 | Framer Motion | 流畅过渡动画 |
| 图标 | Lucide React | 精美图标 |
| 后端 | Rust | 高性能系统调用 |
| 跨平台 | Tauri 2.0 | 原生应用封装 |

## 🔧 开发命令

```bash
npm run tauri dev        # 开发模式（热重载）
npm run dev              # 仅运行前端
npm run build            # 构建前端
npm run tauri build      # 构建完整应用
cd src-tauri && cargo check   # 检查 Rust 代码
```

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE)

## 🔗 相关链接

- [OpenClaw](https://github.com/miaoxworld/openclaw) - OpenClaw 核心项目
- [OpenClawInstaller](https://github.com/miaoxworld/OpenClawInstaller) - 命令行安装器
- [Tauri 官方文档](https://tauri.app/)

---

**Made with ❤️ by OpenClaw Community**

