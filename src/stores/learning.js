import { reactive, watch } from 'vue'
import { getItem, setItem } from '../composables/useStorage.js'

const state = reactive({
  lessonProgress: getItem('lessonProgress', {}),
  quizHistory: getItem('quizHistory', {}),
  wrongAnswers: getItem('wrongAnswers', []),
  checkins: getItem('checkins', []),
  achievements: getItem('achievements', {}),
  totalDays: getItem('totalDays', 0)
})

watch(() => state.lessonProgress, v => setItem('lessonProgress', v), { deep: true })
watch(() => state.quizHistory, v => setItem('quizHistory', v), { deep: true })
watch(() => state.wrongAnswers, v => setItem('wrongAnswers', v), { deep: true })
watch(() => state.checkins, v => setItem('checkins', v), { deep: true })
watch(() => state.achievements, v => setItem('achievements', v), { deep: true })
watch(() => state.totalDays, v => setItem('totalDays', v))

export function markLessonRead(lessonId) {
  if (!state.lessonProgress[lessonId]) {
    state.lessonProgress[lessonId] = {}
  }
  state.lessonProgress[lessonId].read = true
  state.lessonProgress[lessonId].date = new Date().toISOString().slice(0, 10)
  checkin()
}

export function markLessonCompleted(lessonId) {
  if (!state.lessonProgress[lessonId]) {
    state.lessonProgress[lessonId] = {}
  }
  state.lessonProgress[lessonId].completed = true
  state.lessonProgress[lessonId].date = new Date().toISOString().slice(0, 10)
}

export function saveQuizResult(quizId, score, total, answers) {
  state.quizHistory[quizId] = { score, total, date: new Date().toISOString().slice(0, 10), answers }
  checkin()
}

export function addWrongAnswer(quizId, questionId, question, correctAnswer, userAnswer, explanation = '') {
  const existing = state.wrongAnswers.find(w => w.quizId === quizId && w.questionId === questionId)
  if (!existing) {
    state.wrongAnswers.push({
      id: Date.now() + '_' + Math.random().toString(36).slice(2, 6),
      quizId,
      questionId,
      question,
      correctAnswer,
      userAnswer,
      explanation,
      date: new Date().toISOString().slice(0, 10),
      mastered: false
    })
  }
}

export function masterWrongAnswer(id) {
  const item = state.wrongAnswers.find(w => w.id === id)
  if (item) item.mastered = true
}

export function removeWrongAnswer(id) {
  const idx = state.wrongAnswers.findIndex(w => w.id === id)
  if (idx !== -1) state.wrongAnswers.splice(idx, 1)
}

export function checkin() {
  const today = new Date().toISOString().slice(0, 10)
  if (!state.checkins.includes(today)) {
    state.checkins.push(today)
    state.totalDays++
  }
}

export function unlockAchievement(badgeId) {
  if (!state.achievements[badgeId]) {
    state.achievements[badgeId] = { unlocked: true, date: new Date().toISOString().slice(0, 10) }
  }
}

export function getStreak() {
  if (state.checkins.length === 0) return 0
  const sorted = [...state.checkins].sort().reverse()
  let streak = 1
  for (let i = 0; i < sorted.length - 1; i++) {
    const d1 = new Date(sorted[i])
    const d2 = new Date(sorted[i + 1])
    const diff = (d1 - d2) / (1000 * 60 * 60 * 24)
    if (diff === 1) streak++
    else break
  }
  const today = new Date().toISOString().slice(0, 10)
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10)
  if (sorted[0] !== today && sorted[0] !== yesterday) return 0
  return streak
}

export function getUnitProgress(unitLessons) {
  if (!unitLessons || unitLessons.length === 0) return 0
  const completed = unitLessons.filter(id => state.lessonProgress[id]?.completed).length
  return Math.round((completed / unitLessons.length) * 100)
}

export default state
