<template>
  <div class="fade-in">
    <div class="page-header">
      <h2>欢迎回来！</h2>
      <p>{{ todayStr }}</p>
    </div>

    <div class="grid-4 mb-3">
      <div class="stat-card">
        <div class="stat-value">{{ state.totalDays }}</div>
        <div class="stat-label">学习天数</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">{{ streak }}</div>
        <div class="stat-label">连续打卡</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">{{ completedLessons }}</div>
        <div class="stat-label">已完成课时</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">{{ wrongCount }}</div>
        <div class="stat-label">错题数量</div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-title">快速操作</div>
      <div class="grid-2">
        <button class="btn btn-primary" @click="goNextLesson">继续学习</button>
        <button class="btn btn-primary" @click="goNextQuiz">开始答题</button>
        <button class="btn btn-outline" @click="router.push('/wrong-answers')">复习错题</button>
        <button class="btn btn-outline" @click="router.push('/unit/1')">查看目录</button>
      </div>
    </div>

    <div class="mb-2" style="font-size: 18px; font-weight: 600;">章节进度</div>
    <div class="grid-2">
      <div
        v-for="unit in units"
        :key="unit.id"
        class="card"
        style="cursor: pointer"
        @click="router.push(`/unit/${unit.id}`)"
      >
        <div class="flex-between">
          <div>
            <div class="card-title" style="margin-bottom: 4px;">{{ unit.number }}</div>
            <div class="card-subtitle">{{ unit.name }}</div>
          </div>
          <span class="tag tag-blue">{{ unit.lessons.length }} 课时</span>
        </div>
        <div class="progress-bar mt-2">
          <div class="progress-fill" :style="{ width: getUnitProgress(unit) + '%' }"></div>
        </div>
        <div class="mt-1" style="font-size: 12px; color: var(--text-muted);">
          {{ getUnitCompletedCount(unit) }}/{{ unit.lessons.length }} 课时已完成
        </div>
      </div>
    </div>

    <!-- Review Quizzes -->
    <div class="card mb-3">
      <div class="card-title">综合复习测验</div>
      <div class="grid-2">
        <button class="btn btn-outline" @click="startReview('quiz-review-midterm')">
          期中综合测验（20题）
        </button>
        <button class="btn btn-outline" @click="startReview('quiz-review-final')">
          期末综合测验（20题）
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import state from '../stores/learning.js'
import units from '../data/units.js'
import quizzes from '../data/quizzes.js'

const router = useRouter()

const todayStr = new Date().toLocaleDateString('zh-CN', {
  year: 'numeric', month: 'long', day: 'numeric', weekday: 'long'
})

const streak = computed(() => {
  if (state.checkins.length === 0) return 0
  const sorted = [...state.checkins].sort().reverse()
  let s = 1
  for (let i = 0; i < sorted.length - 1; i++) {
    const d1 = new Date(sorted[i])
    const d2 = new Date(sorted[i + 1])
    if ((d1 - d2) / 86400000 === 1) s++
    else break
  }
  const today = new Date().toISOString().slice(0, 10)
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10)
  if (sorted[0] !== today && sorted[0] !== yesterday) return 0
  return s
})

const completedLessons = computed(() => {
  return Object.values(state.lessonProgress).filter(p => p.completed).length
})

const wrongCount = computed(() => {
  return state.wrongAnswers.filter(w => !w.mastered).length
})

function getUnitCompletedCount(unit) {
  return unit.lessons.filter(l => state.lessonProgress[l.id]?.completed).length
}

function getUnitProgress(unit) {
  if (!unit.lessons.length) return 0
  return Math.round((getUnitCompletedCount(unit) / unit.lessons.length) * 100)
}

function goNextLesson() {
  for (const unit of units) {
    for (const lesson of unit.lessons) {
      if (!state.lessonProgress[lesson.id]?.completed) {
        router.push(`/lesson/${lesson.id}`)
        return
      }
    }
  }
  const first = units[0].lessons[0]
  router.push(`/lesson/${first.id}`)
}

function goNextQuiz() {
  for (const quiz of quizzes) {
    if (!state.quizHistory[quiz.id] && quiz.lessonId) {
      router.push(`/quiz/${quiz.lessonId}`)
      return
    }
  }
  const firstQuiz = quizzes.find(q => q.lessonId)
  if (firstQuiz) router.push(`/quiz/${firstQuiz.lessonId}`)
}

function startReview(quizId) {
  router.push({ name: 'reviewQuiz', query: { quizId } })
}
</script>
