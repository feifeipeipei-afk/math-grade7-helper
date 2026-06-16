<template>
  <div v-if="!lesson" class="empty-state fade-in">
    <div class="icon">📖</div>
    <p>未找到该课时</p>
    <button class="btn btn-outline mt-2" @click="router.push('/')">返回首页</button>
  </div>
  <div v-else class="lesson-view fade-in">
    <div class="breadcrumb mb-2">
      <router-link to="/">首页</router-link>
      <span class="breadcrumb-sep">&gt;</span>
      <router-link v-if="unit" :to="`/unit/${unit.id}`">{{ unit.number }}</router-link>
      <span class="breadcrumb-sep">&gt;</span>
      <span class="breadcrumb-current">{{ lesson.title }}</span>
    </div>

    <div class="card mb-3">
      <div class="flex-between">
        <div>
          <div class="lesson-header-number">{{ lesson.number }}</div>
          <h2 class="lesson-header-title">{{ lesson.title }}</h2>
        </div>
        <span class="tag" :class="typeTagClass(lesson.type)">{{ lesson.type }}</span>
      </div>
      <p v-if="lesson.summary" class="card-subtitle mt-1">{{ lesson.summary }}</p>
    </div>

    <!-- Key Concepts -->
    <div v-if="lesson.concepts && lesson.concepts.length" class="card mb-3">
      <div class="card-title">核心概念</div>
      <div class="concepts-wrap">
        <span v-for="c in lesson.concepts" :key="c" class="concept-chip">
          <span class="chip-label">{{ c }}</span>
        </span>
      </div>
    </div>

    <!-- Definitions -->
    <div v-if="lesson.definitions && lesson.definitions.length" class="card mb-3">
      <div class="card-title">定义与概念</div>
      <div v-for="(def, idx) in lesson.definitions" :key="idx" class="definition-box">
        <div class="def-term">{{ def.term }}</div>
        <p>{{ def.content }}</p>
      </div>
    </div>

    <!-- Formulas -->
    <div v-if="lesson.formulas && lesson.formulas.length" class="card mb-3">
      <div class="card-title">公式与法则</div>
      <div v-for="(f, idx) in lesson.formulas" :key="idx" class="formula-section">
        <div v-if="f.name" class="formula-name">{{ f.name }}</div>
        <div class="formula-box">{{ f.expr }}</div>
        <p v-if="f.note" class="formula-note">{{ f.note }}</p>
      </div>
    </div>

    <!-- Key Knowledge Points -->
    <div v-if="lesson.knowledge && lesson.knowledge.length" class="card mb-3">
      <div class="card-title">知识要点</div>
      <div v-for="(kp, idx) in lesson.knowledge" :key="idx" class="knowledge-card">
        <h4>{{ kp.title }}</h4>
        <p>{{ kp.content }}</p>
      </div>
    </div>

    <!-- Examples -->
    <div v-if="lesson.examples && lesson.examples.length" class="card mb-3">
      <div class="card-title">典型例题</div>
      <div v-for="(ex, idx) in lesson.examples" :key="idx" class="example-box">
        <div class="example-title">例{{ idx + 1 }}</div>
        <p><strong>题目：</strong>{{ ex.problem }}</p>
        <p v-if="ex.solution" class="mt-1"><strong>解答：</strong>{{ ex.solution }}</p>
        <p v-if="ex.tip" class="highlight-box mt-1">{{ ex.tip }}</p>
      </div>
    </div>

    <!-- Thinking Question -->
    <div v-if="lesson.thinkQuestion" class="card mb-3">
      <div class="card-title">思考题</div>
      <div class="thinking-box">
        <p>{{ lesson.thinkQuestion }}</p>
      </div>
    </div>

    <!-- Key Highlights -->
    <div v-if="lesson.highlights && lesson.highlights.length" class="card mb-3">
      <div class="card-title">重点归纳</div>
      <div v-for="(h, idx) in lesson.highlights" :key="idx" class="highlight-box">
        {{ h }}
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="card">
      <div class="flex gap-2" style="justify-content: center; flex-wrap: wrap;">
        <button
          class="btn btn-primary"
          :disabled="isRead"
          @click="doMarkRead"
        >
          {{ isRead ? '已标记学习' : '标记已学习' }}
        </button>
        <button class="btn btn-blue" @click="goQuiz">进入测验</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import state, { markLessonRead, markLessonCompleted } from '../stores/learning.js'
import units from '../data/units.js'
import quizzes from '../data/quizzes.js'

const route = useRoute()
const router = useRouter()
const lessonId = route.params.id

let lesson = null
let unit = null
for (const u of units) {
  const found = u.lessons.find(l => l.id === lessonId)
  if (found) { lesson = found; unit = u; break }
}

function typeTagClass(type) {
  const map = { '概念课': 'tag-blue', '计算课': 'tag-green', '应用课': 'tag-yellow', '几何课': 'tag-purple' }
  return map[type] || 'tag-blue'
}

const isRead = computed(() => state.lessonProgress[lessonId]?.read)

function doMarkRead() {
  markLessonRead(lessonId)
  markLessonCompleted(lessonId)
}

function goQuiz() {
  const quiz = quizzes.find(q => q.lessonId === lessonId)
  if (quiz) {
    router.push(`/quiz/${lessonId}`)
  }
}

// Auto-mark as read when scrolling near bottom
function handleScroll() {
  const scrollBottom = window.innerHeight + window.scrollY
  const docHeight = document.documentElement.scrollHeight
  if (docHeight - scrollBottom < 100 && !isRead.value) {
    markLessonRead(lessonId)
  }
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.breadcrumb {
  display: flex; align-items: center; gap: 6px;
  font-size: 13px; color: #999; flex-wrap: wrap;
}
.breadcrumb a { color: var(--primary); text-decoration: none; }
.breadcrumb a:hover { text-decoration: underline; }
.breadcrumb-sep { color: #ccc; font-size: 12px; }
.breadcrumb-current { color: #666; }

.lesson-header-number { font-size: 13px; color: var(--text-muted); font-weight: 600; }
.lesson-header-title { font-size: 22px; font-weight: 700; margin-top: 2px; }

.concepts-wrap { display: flex; flex-wrap: wrap; gap: 6px; }

.formula-section { margin-bottom: 16px; }
.formula-name { font-size: 14px; font-weight: 600; color: var(--text-light); margin-bottom: 4px; }
.formula-note { font-size: 13px; color: var(--text-muted); margin-top: 6px; padding: 0 4px; }

.thinking-box {
  background: linear-gradient(135deg, var(--blue-light), var(--primary-bg));
  border-radius: var(--radius-sm);
  padding: 16px 20px;
  font-size: 14px;
  line-height: 1.8;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}
</style>
