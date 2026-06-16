# 数学七上学习助手

> 基于 Vue 3 + Vite 构建的纯前端数学学习应用，覆盖人教版数学七年级上册全部 4 章 15 课时。

## 功能特色

- **教材全覆盖**：4 章 15 课时完整内容，含定义、公式、典型例题、知识要点
- **智能测验**：每课 22 道选择题，两步确认答题 + 详细解析
- **真题题库**：184 道网络真题（学科网、教习网、人人文档、道客巴巴） + 146 道 AI 补充
- **学习追踪**：localStorage 持久化学习进度、答题历史、错题集
- **连续打卡**：自动计算连续学习天数
- **综合复习**：期中/期末综合测验（各 20 题）

## 技术栈

- **Vue 3.5** — Composition API
- **Vue Router 4** — Hash 模式路由
- **Vite 8** — 构建工具
- **纯 CSS** — 无 UI 组件库，自定义设计系统

## 项目结构

```
math-prep/
├── index.html                 # 入口 HTML
├── package.json               # 依赖配置
├── vite.config.js             # Vite 配置
├── public/favicon.svg          # 网站图标
├── src/
│   ├── main.js                 # 应用入口
│   ├── App.vue                 # 根组件（侧边栏布局）
│   ├── router/
│   │   └── index.js            # 路由配置
│   ├── data/
│   │   ├── units.js            # 教材数据（4 章 15 课）
│   │   └── quizzes.js          # 题库（17 套 370 题）
│   ├── stores/
│   │   └── learning.js         # 状态管理 + localStorage 持久化
│   ├── composables/
│   │   └── useStorage.js       # localStorage 读写封装
│   ├── styles/
│   │   └── main.css            # 全局 CSS 设计系统
│   └── views/
│       ├── HomeView.vue        # 首页仪表盘
│       ├── UnitView.vue        # 章节详情
│       ├── LessonView.vue      # 课时学习
│       ├── QuizView.vue        # 答题测验
│       ├── QuizResult.vue      # 答题结果
│       └── WrongAnswers.vue    # 错题集
└── dist/                       # 构建产物
```

## 快速开始

```bash
# 克隆项目
git clone https://github.com/feifeipeipei-afk/math-grade7-helper.git
cd math-grade7-helper

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建产物
npm run preview
```

## 教材内容

| 章节 | 课时 | 内容 |
|------|------|------|
| 第一章 有理数 | 5 课 | 正数和负数、有理数分类、数轴、相反数、绝对值、加减乘除、乘方、科学记数法 |
| 第二章 整式的加减 | 2 课 | 单项式、多项式、同类项、合并同类项、去括号 |
| 第三章 一元一次方程 | 4 课 | 方程概念、合并同类项与移项、去括号与去分母、实际问题 |
| 第四章 几何图形初步 | 4 课 | 立体图形、直线射线线段、角的度量与比较、余角补角、展开图 |

## 题库统计

- **15 套课时测验**：每套 22 题（12 题网络真题 + 10 题 AI 补充）
- **2 套综合测验**：期中 20 题 + 期末 20 题
- **总计 370 题**：全部含详细解析

## 浏览器兼容性

- Chrome / Edge / Firefox / Safari 最新版
- 支持移动端浏览（响应式布局）

## 部署

构建产物在 `dist/` 目录，可部署到任意静态托管服务：

- GitHub Pages
- Vercel / Netlify
- Nginx / Apache
- 直接双击 `dist/index.html` 也能运行（Hash 路由）

## 数据来源

- **教材内容**：人教版《义务教育教科书·数学 七年级上册》
- **真题来源**：学科网、教习网、人人文档、道客巴巴、360 文档
- **补充题目**：AI 生成

## 已知 Bug 修复记录

1. `markLessonCompleted` 未调用导致进度条始终为 0%
2. QuizResult 显示用户答案为原始索引号（0/1/2/3）
3. 侧边栏高亮逻辑错误（进入任意章节所有章节都高亮）
4. UnitView 章节测验逻辑错误
5. LessonView 无效 ID 时崩溃
6. 答题完成瞬间页面空白闪烁
7. 期中/期末综合测验无入口
8. `u2-l6-q17` 答案错误（已修正）
9. UnitView 路由复用时内容不更新（`computed()` 修复）

## 许可证

MIT
