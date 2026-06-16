<template>
  <div class="fade-in">
    <div class="breadcrumb mb-2">
      <router-link to="/">首页</router-link>
      <span class="breadcrumb-sep">&gt;</span>
      <span class="breadcrumb-current">{{ unit.number }}</span>
    </div>

    <div class="page-header">
      <h2>{{ unit.number }} · {{ unit.name }}</h2>
      <p>{{ unit.theme }}</p>
    </div>

    <div class="card mb-3">
      <div class="card-title">学习目标</div>
      <div class="goals-list">
        <div v-for="(goal, idx) in unit.goals" :key="idx" class="goal-item">
          <span class="goal-num">{{ idx + 1 }}</span>
          <span>{{ goal }}</span>
        </div>
      </div>
    </div>

    <div class="mb-2" style="font-size: 18px; font-weight: 600;">课时列表</div>
    <div class="grid-2 mb-3">
      <div
        v-for="lesson in unit.lessons"
        :key="lesson.id"
        class="lesson-card card"
        @click="router.push(`/lesson/${lesson.id}`)"
      >
        <div class="flex-between">
          <span class="tag" :class="typeTagClass(lesson.type)">{{ lesson.type }}</span>
          <span class="status-tag" :class="statusClass(lesson.id)">{{ statusText(lesson.id) }}</span>
        </div>
        <div class="lesson-number mt-1">{{ lesson.number }}</div>
        <div class="lesson-title">{{ lesson.title }}</div>
        <div class="card-subtitle mt-1">{{ lesson.summary }}</div>
      </div>
    </div>

    <div class="card">
      <div class="flex-between mb-2">
        <div class="card-title" style="margin-bottom:0">课时测验</div>
        <span v-if="quizScore" class="tag tag-green">上次 {{ quizScore }}/{{ quizTotal }}</span>
      </div>
      <p class="card-subtitle">点击各课时卡片进入学习，完成后可挑战对应测验。</p>
      <button class="btn btn-primary mt-1" @click="startQuiz">
        {{ quizScore !== null ? '重做第一课测验' : '开始第一课测验' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import state from '../stores/learning.js'
import units from '../data/units.js'
import quizzes from '../data/quizzes.js'

const route = useRoute()
const router = useRouter()
const unitId = computed(() => parseInt(route.params.id))
const unit = computed(() => units.find(u => u.id === unitId.value) || units[0])

function typeTagClass(type) {
  const map = { '概念课': 'tag-blue', '计算课': 'tag-green', '应用课': 'tag-yellow', '几何课': 'tag-purple' }
  return map[type] || 'tag-blue'
}

function statusClass(lessonId) {
  const p = state.lessonProgress[lessonId]
  if (p?.completed) return 'status-done'
  if (p?.read) return 'status-read'
  return 'status-new'
}

function statusText(lessonId) {
  const p = state.lessonProgress[lessonId]
  if (p?.completed) return '已完成'
  if (p?.read) return '已学习'
  return '未开始'
}

const unitLessonIds = computed(() => new Set(unit.value.lessons.map(l => l.id)))
const unitQuiz = computed(() => quizzes.find(q => q.lessonId && unitLessonIds.value.has(q.lessonId)))
const quizScore = computed(() => {
  if (!unitQuiz.value) return null
  return state.quizHistory[unitQuiz.value.id]?.score ?? null
})
const quizTotal = computed(() => {
  if (!unitQuiz.value) return 0
  return unitQuiz.value.questions?.length || 0
})

function startQuiz() {
  if (unitQuiz.value) {
    router.push(`/quiz/${unitQuiz.value.lessonId}`)
  }
}
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

.goals-list { display: flex; flex-direction: column; gap: 10px; }
.goal-item {
  display: flex; align-items: flex-start; gap: 10px;
  font-size: 14px; color: var(--text-light); line-height: 1.6;
}
.goal-num {
  flex-shrink: 0; width: 24px; height: 24px; border-radius: 50%;
  background: var(--primary-bg); color: var(--primary);
  display: flex; align-items: center; justify-content: center;
  font-size: 12px; font-weight: 700;
}

.lesson-card { cursor: pointer; transition: all 0.2s ease; }
.lesson-card:hover { transform: translateY(-2px); box-shadow: 0 4px 16px rgba(0,0,0,0.08); }
.lesson-number { font-size: 12px; color: var(--text-muted); font-weight: 600; }
.lesson-title { font-size: 16px; font-weight: 600; color: var(--text); margin-top: 2px; }

.status-tag { font-size: 12px; font-weight: 600; padding: 2px 8px; border-radius: 12px; }
.status-new { color: var(--text-muted); background: var(--bg); }
.status-read { color: var(--yellow); background: var(--yellow-light); }
.status-done { color: var(--green); background: var(--green-light); }
</style>
