<template>
  <div class="quiz-result-view">
    <div v-if="!result || !quiz" class="empty-state">
      <div class="icon">📋</div>
      <p>未找到答题记录</p>
      <button class="btn btn-outline mt-2" @click="router.push('/')">返回首页</button>
    </div>

    <template v-else>
      <div class="card text-center fade-in">
        <div class="page-header">
          <h2>{{ quiz.title }} - 答题结果</h2>
        </div>

        <div class="score-display">
          <svg width="160" height="160" viewBox="0 0 160 160">
            <circle cx="80" cy="80" r="70" fill="none" stroke="#E0E6ED" stroke-width="12" />
            <circle
              cx="80" cy="80" r="70" fill="none"
              :stroke="scoreColor"
              stroke-width="12"
              stroke-linecap="round"
              :stroke-dasharray="circumference"
              :stroke-dashoffset="dashOffset"
              transform="rotate(-90 80 80)"
              style="transition: stroke-dashoffset 1s ease"
            />
          </svg>
          <div class="score-text">{{ result.score }}/{{ result.total }}</div>
        </div>

        <div class="score-percentage mt-2" :style="{ color: scoreColor }">{{ percentage }}%</div>
        <div class="score-message mt-1">{{ encourageMessage }}</div>
      </div>

      <div class="card fade-in">
        <h3 class="card-title">答题详情</h3>
        <div class="answer-list">
          <div
            v-for="(item, idx) in result.answers"
            :key="idx"
            class="answer-item"
            :class="{ 'answer-correct': item.correct, 'answer-wrong': !item.correct }"
          >
            <div class="flex-between">
              <span class="answer-index">第 {{ idx + 1 }} 题</span>
              <span class="tag" :class="item.correct ? 'tag-green' : 'tag-red'">
                {{ item.correct ? '正确' : '错误' }}
              </span>
            </div>
            <div v-if="!item.correct" class="answer-detail mt-1">
              <p><span class="label">你的答案：</span>{{ displayUserAnswer(item) }}</p>
              <p><span class="label">正确答案：</span>{{ item.correctAnswer }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="card fade-in">
        <div class="flex gap-2" style="justify-content: center; flex-wrap: wrap;">
          <button class="btn btn-primary" @click="redoQuiz">重做测验</button>
          <button class="btn btn-outline" @click="router.push({ name: 'wrongAnswers' })">查看错题</button>
          <button class="btn btn-outline" @click="router.push({ name: 'unit', params: { id: quiz.unitId } })">返回章节</button>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import state from '../stores/learning.js'
import quizzes from '../data/quizzes.js'

const route = useRoute()
const router = useRouter()

const quizId = route.query.quizId
const quiz = quizzes.find(q => q.id === quizId)
const result = state.quizHistory[quizId]

const circumference = 2 * Math.PI * 70

const percentage = computed(() => {
  if (!result) return 0
  return Math.round((result.score / result.total) * 100)
})

const dashOffset = computed(() => {
  return circumference - (circumference * percentage.value) / 100
})

const scoreColor = computed(() => {
  const pct = percentage.value
  if (pct >= 80) return '#66BB6A'
  if (pct >= 60) return '#FFB300'
  return '#EF5350'
})

const encourageMessage = computed(() => {
  const pct = percentage.value
  if (pct === 100) return '太棒了！全部正确！🎉'
  if (pct >= 80) return '很棒！继续保持！👏'
  if (pct >= 60) return '不错，再复习一下错题吧！💪'
  return '别灰心，回顾课时内容再来挑战！📖'
})

function displayUserAnswer(item) {
  if (item.userAnswer === null || item.userAnswer === undefined) return '未作答'
  return item.userAnswer
}

function redoQuiz() {
  delete state.quizHistory[quizId]
  if (quiz?.lessonId) {
    router.push({ name: 'quiz', params: { lessonId: quiz.lessonId } })
  }
}
</script>

<style scoped>
.quiz-result-view { max-width: 720px; margin: 0 auto; }
.score-display { position: relative; display: inline-block; margin: 16px 0; }
.score-text {
  position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
  font-size: 28px; font-weight: 700; color: var(--text);
}
.score-percentage { font-size: 22px; font-weight: 700; }
.score-message { font-size: 16px; color: var(--text-light); padding-bottom: 8px; }
.answer-list { margin-top: 12px; }
.answer-item {
  padding: 12px 16px; border-radius: 8px; margin-bottom: 8px;
  border: 1px solid var(--border);
}
.answer-correct { border-left: 4px solid var(--green); background: var(--green-light); }
.answer-wrong { border-left: 4px solid var(--red); background: var(--red-light); }
.answer-index { font-weight: 600; font-size: 14px; }
.answer-detail { font-size: 14px; color: var(--text-light); line-height: 1.8; }
.answer-detail .label { color: var(--text-muted); font-size: 13px; }
</style>
