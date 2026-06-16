# 数学七上学习助手 — 技术架构文档

## 1. 技术选型

| 技术 | 版本 | 用途 |
|------|------|------|
| Vue | 3.5.34 | 前端框架，Composition API |
| Vue Router | 4.6.4 | 客户端路由，Hash 模式 |
| Vite | 8.0.0 | 构建工具、开发服务器 |
| 纯 CSS | — | 无 UI 库，自定义设计系统 |

## 2. 架构概览

```
┌─────────────────────────────────────────┐
│              App.vue (根)              │
│  ┌──────────────┐  ┌──────────────────┐│
│  │   Sidebar    │  │   Main Content   ││
│  │   导航菜单     │  │   router-view    ││
│  └──────────────┘  └──────────────────┘│
└─────────────────────────────────────────┘
```

**设计原则**：纯前端静态应用，零后端依赖，可部署到任何静态托管。

## 3. 路由设计

| 路径 | 组件 | 说明 |
|------|------|------|
| `/` | HomeView | 仪表盘、章节进度、快速操作 |
| `/unit/:id` | UnitView | 章节详情、课时列表、测验入口 |
| `/lesson/:id` | LessonView | 课时内容（定义/公式/例题） |
| `/quiz/:lessonId` | QuizView | 答题测验（两步确认） |
| `/quiz` | QuizView | 综合复习测验（query: quizId） |
| `/quiz/result` | QuizResult | 答题结果 + 成绩环 |
| `/wrong-answers` | WrongAnswers | 错题集 + 重做 |

**路由顺序**：`/quiz/result` 必须排在 `/quiz/:lessonId` 之前，避免 "result" 被捕获为 `:lessonId`。

## 4. 数据层

### 4.1 units.js — 教材数据

```js
// 数据结构
[
  {
    id: 1,
    number: '第一章',
    name: '有理数',
    theme: '...',
    goals: ['...'],
    lessons: [
      {
        id: 'u1-l1',      // 全局顺序编号
        number: '1.1',
        title: '正数和负数',
        type: '概念课',   // 概念课/计算课/应用课/几何课
        summary: '...',
        concepts: ['...'],
        definitions: [{ term, content }],
        formulas: [{ name, expr, note }],
        knowledge: [{ title, content }],
        examples: [{ problem, solution, tip }],
        thinkQuestion: '...',
        highlights: ['...']
      }
    ]
  }
]
```

**ID 约定**：`u{章号}-l{全局序号}`，全局顺序从 u1-l1 到 u4-l15，不按章节重置。

### 4.2 quizzes.js — 题库

```js
// 数据结构
[
  {
    id: 'quiz-u1-l1',
    lessonId: 'u1-l1',
    unitId: 1,
    title: '1.1 正数和负数 小测验',
    questions: [
      {
        id: 'u1-l1-q1',
        type: 'choice',
        question: '...',
        options: ['A. ...', 'B. ...', 'C. ...', 'D. ...'],
        answer: 0,        // 0-based index
        explanation: '...'
      }
    ]
  }
]
```

**题目来源**：
- 每套 22 题 = 12 题网络真题（学科网/教习网/人人文档/道客巴巴）+ 10 题 AI 补充
- 综合测验：期中 20 题 + 期末 20 题（全 AI 生成）

## 5. 状态管理

### 5.1 状态结构

```js
state = {
  lessonProgress: {},   // { lessonId: { read, completed, date } }
  quizHistory: {},      // { quizId: { score, total, date, answers[] } }
  wrongAnswers: [],     // [{ id, quizId, questionId, question, correctAnswer, userAnswer, explanation, date, mastered }]
  checkins: [],         // ['2024-09-01', ...]
  achievements: {},     // { badgeId: { unlocked, date } }
  totalDays: 0
}
```

### 5.2 持久化

使用 `localStorage`，每项数据独立存储：

```js
const PREFIX = 'math7s_'   // 避免与其他应用冲突
localStorage.setItem(PREFIX + 'lessonProgress', JSON.stringify(data))
```

**自动同步**：通过 Vue `watch(..., { deep: true })` 实现 mutations → localStorage 自动同步。

## 6. 组件设计

### 6.1 App.vue — 侧边栏布局

```
┌────────────────────────────────────────┐
│  Logo/标题                              │
│  ──────────────────────                │
│  📋 首页                                │
│  🔢 第一章 · 有理数                      │
│  📐 第二章 · 整式的加减                   │
│  🔣 第三章 · 一元一次方程                 │
│  📏 第四章 · 几何图形初步                  │
│  📝 错题集                               │
│  ──────────────────────                  │
│  🔥 连续 X 天                            │
└────────────────────────────────────────┘
```

- 固定宽度 240px，左侧固定定位
- 响应式：移动端隐藏

### 6.2 LessonView — 课时学习

内容区块顺序：
1. 课时标题卡片
2. 核心概念（标签云）
3. 定义与概念（definition-box）
4. 公式与法则（formula-box）
5. 知识要点（knowledge-card）
6. 典型例题（example-box）
7. 思考题
8. 重点归纳（highlight-box）
9. 操作按钮（标记已学习 / 进入测验）

**自动学习标记**：滚动到页面底部 100px 内自动标记为已读。

### 6.3 QuizView — 答题测验

**三步流程**：
1. 开始前：显示标题、题目数量、开始按钮
2. 答题中：进度条、题目、选项、确认按钮、解析
3. 完成后：自动跳转到结果页

**两步确认机制**：
1. 用户选择选项 → 高亮选中
2. 点击"确认答案" → 显示正确/错误 + 解析
3. 点击"下一题" → 进入下一题

**错题追踪**：答错的题目自动加入错题集（含题目、正确答案、用户答案、解析）。

## 7. CSS 设计系统

### 7.1 颜色体系

```css
:root {
  --primary: #4A90D9;       /* 主色：数学蓝 */
  --primary-dark: #3A7BC8;  /* 深蓝 */
  --primary-light: #BBDEFB; /* 浅蓝 */
  --primary-bg: #E3F2FD;   /* 背景蓝 */
  --accent: #FF9800;        /* 强调橙 */
  --green: #66BB6A;         /* 成功绿 */
  --yellow: #FFB300;        /* 警告黄 */
  --red: #EF5350;           /* 错误红 */
}
```

### 7.2 数学专用样式

| 类名 | 用途 | 示例 |
|------|------|------|
| `.formula-box` | 数学公式展示 | `a + b = b + a` |
| `.definition-box` | 定义/概念 | "负数：小于0的数" |
| `.example-box` | 典型例题 | 题目 + 解答 |
| `.highlight-box` | 重点归纳 | 核心结论 |
| `.math` | 数学字体 | Cambria Math |

## 8. 题库扩充流水线

```
WebSearch 搜索真题
    ↓
WebFetch 提取题目（Markdown）
    ↓
Agent 转 JS batch（CommonJS）
    ↓
Node 合并脚本（去重 + 补充 + 重编号）
    ↓
验证（字段/选项/答案/ID/去重）
    ↓
vite build
```

### 8.1 关键转义函数

```js
function esc(s) {
  return s
    .replace(/\\/g, '\\\\')   // 反斜杠
    .replace(/'/g, "\\'")     // 单引号
    .replace(/\r?\n/g, '\\n') // 换行符（关键！）
    .replace(/\r/g, '')
}
```

**坑点**：换行符转义不全会导致 JS 语法错误（`SyntaxError: Invalid or unexpected token`）。

### 8.2 题目去重策略

- 按题目文本（去除空白后）去重
- 网络真题优先（排前面）
- AI 题目补充到 22 题/套

## 9. 性能优化

| 策略 | 实现 |
|------|------|
| 代码分割 | 路由懒加载 `() => import(...)` |
| 数据分块 | units.js / quizzes.js 作为独立 chunk |
| localStorage | 按 key 拆分，避免大 JSON 序列化 |
| CSS | 纯 CSS，无预处理，无组件库 |

## 10. 浏览器存储

```
math7s_lessonProgress   → 学习进度
math7s_quizHistory      → 答题记录
math7s_wrongAnswers     → 错题集
math7s_checkins         → 打卡记录
math7s_achievements     → 成就
math7s_totalDays        → 学习天数
```

## 11. 已知问题

1. **Daylight Saving Time 边界**：连续打卡计算可能在夏令时转换日偏差一天
2. **localStorage 容量**：单 key 不超过 5MB，当前存储方案远未达到
3. **图片缺失**：纯文本应用，无图片资源（适合数学公式展示）

## 12. 扩展建议

1. **图片支持**：几何图形、函数图像需 SVG/Canvas 支持
2. **公式渲染**：集成 KaTeX/MathJax 支持 LaTeX 公式
3. **数据导出**：学习报告导出为 PDF
4. **云端同步**：后端 API + 用户账号体系
5. **移动端 App**：PWA 打包或 Flutter/UniApp 重构
