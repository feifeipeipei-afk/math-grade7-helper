<template>
  <div class="quiz-view">
    <div v-if="quiz" class="breadcrumb">
      <router-link to="/">首页</router-link>
      <span class="breadcrumb-sep">&gt;</span>
      <router-link v-if="unit" :to="`/unit/${unit.id}`">{{ unit.number }}</router-link>
      <span class="breadcrumb-sep">&gt;</span>
      <span class="breadcrumb-current">{{ lessonTitle }}</span>
      <span class="breadcrumb-sep">&gt;</span>
      <span class="breadcrumb-current">小测验</span>
    </div>

    <div v-if="!quiz" class="empty-state">
      <div class="icon">📝</div>
      <p>未找到该课时的测验</p>
      <button class="btn btn-outline mt-2" @click="router.push('/')">返回首页</button>
    </div>

    <div v-else-if="!started" class="card text-center fade-in">
      <div class="page-header">
        <h2>{{ lessonTitle }} · 小测验</h2>
        <p>共 {{ questions.length }} 道选择题</p>
      </div>
      <div class="quiz-info mb-3">
        <div class="flex gap-2 flex-center">
          <span class="tag tag-blue">选择题 {{ questions.length }} 题</span>
        </div>
      </div>
      <button class="btn btn-primary" @click="started = true">开始答题</button>
    </div>

    <div v-else-if="!finished" class="card fade-in">
      <div class="flex-between mb-1">
        <span class="card-subtitle" style="margin-bottom:0">第 {{ currentIndex + 1 }} / {{ questions.length }} 题</span>
        <span class="tag tag-blue">选择题</span>
      </div>
      <div class="progress-bar mb-2">
        <div class="progress-fill" :style="{ width: progressPercent + '%' }"></div>
      </div>

      <h3 class="card-title">{{ currentQuestion.question }}</h3>

      <div class="mt-1">
        <div
          v-for="(option, idx) in currentQuestion.options"
          :key="idx"
          class="quiz-option"
          :class="optionClass(idx)"
          @click="selectOption(idx)"
        >
          {{ option }}
        </div>
      </div>

      <div v-if="!confirmed" class="mt-2 text-center">
        <button class="btn btn-primary" :disabled="selectedAnswer === null" @click="confirmAnswer">
          确认答案
        </button>
      </div>

      <div v-else class="mt-2 fade-in">
        <div class="quiz-explanation">
          <strong>{{ isLastAnswerCorrect ? '✅ 回答正确！' : '❌ 回答错误' }}</strong>
          <p style="margin-top:8px;">{{ currentQuestion.explanation }}</p>
        </div>
        <div class="mt-2 text-center">
          <button class="btn btn-primary" @click="nextQuestion">
            {{ currentIndex < questions.length - 1 ? '下一题' : '查看结果' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Finished (brief loading state) -->
    <div v-else class="card text-center fade-in">
      <div class="page-header">
        <h2>正在计算成绩...</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import state, { saveQuizResult, addWrongAnswer } from '../stores/learning.js'
import quizzes from '../data/quizzes.js'
import units from '../data/units.js'

const route = useRoute()
const router = useRouter()

const lessonId = route.params.lessonId
const quizIdParam = route.query.quizId
const rawQuiz = quizIdParam
  ? quizzes.find(q => q.id === quizIdParam)
  : quizzes.find(q => q.lessonId === lessonId)

const questions = computed(() => {
  if (!rawQuiz) return []
  return rawQuiz.questions
})

const quiz = rawQuiz || null

const unit = computed(() => {
  if (!quiz) return null
  return units.find(u => u.id === quiz.unitId) || null
})

const lessonTitle = computed(() => {
  if (quizIdParam && quiz) return quiz.title.replace(' 小测验', '')
  if (!unit.value) return '课时'
  for (const lesson of unit.value.lessons) {
    if (lesson.id === lessonId) return lesson.title
  }
  return '课时'
})

const currentIndex = ref(0)
const selectedAnswer = ref(null)
const confirmed = ref(false)
const score = ref(0)
const answers = ref([])
const started = ref(false)
const finished = ref(false)
const isLastAnswerCorrect = ref(false)

const currentQuestion = computed(() => questions.value[currentIndex.value])

const progressPercent = computed(() => {
  if (questions.value.length === 0) return 0
  return Math.round(((currentIndex.value + 1) / questions.value.length) * 100)
})

function optionClass(idx) {
  if (!confirmed.value) {
    return { selected: selectedAnswer.value === idx }
  }
  const q = currentQuestion.value
  const classes = {}
  if (idx === q.answer) {
    classes.correct = true
    if (selectedAnswer.value !== idx) classes['show-correct'] = true
  }
  if (selectedAnswer.value === idx && idx !== q.answer) classes.wrong = true
  return classes
}

function selectOption(idx) {
  if (confirmed.value) return
  selectedAnswer.value = idx
}

function confirmAnswer() {
  if (selectedAnswer.value === null) return
  confirmed.value = true
  const q = currentQuestion.value
  const isCorrect = selectedAnswer.value === q.answer
  isLastAnswerCorrect.value = isCorrect

  if (isCorrect) {
    score.value++
  } else {
    addWrongAnswer(quiz.id, q.id, q.question, q.options[q.answer], q.options[selectedAnswer.value], q.explanation || '')
  }

  answers.value.push({
    questionId: q.id,
    userAnswer: q.options[selectedAnswer.value],
    correct: isCorrect,
    correctAnswer: q.options[q.answer]
  })
}

function nextQuestion() {
  if (currentIndex.value < questions.value.length - 1) {
    currentIndex.value++
    selectedAnswer.value = null
    confirmed.value = false
    isLastAnswerCorrect.value = false
  } else {
    finished.value = true
    saveQuizResult(quiz.id, score.value, questions.value.length, answers.value)
    router.push({ name: 'quizResult', query: { quizId: quiz.id } })
  }
}
</script>

<style scoped>
.quiz-view { max-width: 720px; margin: 0 auto; }
.breadcrumb {
  display: flex; align-items: center; gap: 6px;
  font-size: 13px; color: #999; margin-bottom: 16px; flex-wrap: wrap;
}
.breadcrumb a { color: var(--primary); text-decoration: none; }
.breadcrumb a:hover { text-decoration: underline; }
.breadcrumb-sep { color: #ccc; font-size: 12px; }
.breadcrumb-current { color: #666; }
.quiz-info { padding: 16px 0; }
.btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }
</style>
