<template>
  <div class="fade-in">
    <div class="breadcrumb mb-2">
      <router-link to="/">首页</router-link>
      <span class="breadcrumb-sep">&gt;</span>
      <span class="breadcrumb-current">错题集</span>
    </div>

    <div class="page-header">
      <h2>错题集</h2>
      <p>共 {{ wrongAnswers.length }} 道错题，{{ masteredCount }} 道已掌握</p>
    </div>

    <div class="filter-tabs mb-3">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        class="filter-tab"
        :class="{ active: activeTab === tab.key }"
        @click="activeTab = tab.key"
      >
        {{ tab.label }} ({{ tab.count }})
      </button>
    </div>

    <div v-if="filteredItems.length === 0" class="empty-state">
      <div class="icon">✅</div>
      <p>{{ activeTab === 'all' ? '暂无错题，继续保持！' : '该分类下暂无错题' }}</p>
    </div>

    <div v-for="item in filteredItems" :key="item.id" class="wrong-card card mb-2">
      <div class="flex-between mb-1">
        <span class="tag tag-blue">{{ getQuizTitle(item.quizId) }}</span>
        <div class="flex gap-1">
          <span class="tag" :class="item.mastered ? 'tag-green' : 'tag-yellow'">
            {{ item.mastered ? '已掌握' : '未掌握' }}
          </span>
        </div>
      </div>

      <div class="wrong-question">{{ item.question }}</div>

      <div class="wrong-answers mt-1">
        <div class="wrong-row">
          <span class="wrong-label">你的答案：</span>
          <span class="wrong-value wrong-user">{{ item.userAnswer }}</span>
        </div>
        <div class="wrong-row">
          <span class="wrong-label">正确答案：</span>
          <span class="wrong-value wrong-correct">{{ item.correctAnswer }}</span>
        </div>
      </div>

      <div v-if="item.explanation" class="wrong-explanation mt-1">
        {{ item.explanation }}
      </div>

      <!-- Redo inline -->
      <div v-if="redoingId === item.id" class="redo-section mt-2">
        <div class="redo-question">{{ redoQuestion?.question }}</div>
        <div class="mt-1">
          <div
            v-for="(opt, idx) in redoQuestion?.options"
            :key="idx"
            class="quiz-option"
            :class="redoOptionClass(idx)"
            @click="selectRedoOption(idx)"
          >
            {{ opt }}
          </div>
        </div>
        <div v-if="!redoConfirmed" class="mt-1 text-center">
          <button class="btn btn-primary btn-sm" :disabled="redoSelected === null" @click="confirmRedo">确认</button>
        </div>
        <div v-else class="mt-1">
          <div class="quiz-explanation">
            <strong>{{ redoCorrect ? '✅ 回答正确！已标记为掌握' : '❌ 还需继续练习' }}</strong>
          </div>
        </div>
      </div>

      <div class="wrong-actions mt-2 flex gap-1">
        <button v-if="!item.mastered && redoingId !== item.id" class="btn btn-sm btn-primary" @click="startRedo(item)">重做</button>
        <button v-if="!item.mastered" class="btn btn-sm btn-outline" @click="doMaster(item.id)">标记掌握</button>
        <button class="btn btn-sm btn-outline" @click="doRemove(item.id)">移除</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import state, { masterWrongAnswer, removeWrongAnswer } from '../stores/learning.js'
import quizzes from '../data/quizzes.js'

const activeTab = ref('all')
const redoingId = ref(null)
const redoSelected = ref(null)
const redoConfirmed = ref(false)
const redoCorrect = ref(false)

const wrongAnswers = computed(() => state.wrongAnswers)
const masteredCount = computed(() => state.wrongAnswers.filter(w => w.mastered).length)

const tabs = computed(() => [
  { key: 'all', label: '全部', count: wrongAnswers.value.length },
  { key: 'unmastered', label: '未掌握', count: wrongAnswers.value.filter(w => !w.mastered).length },
  { key: 'mastered', label: '已掌握', count: masteredCount.value }
])

const filteredItems = computed(() => {
  if (activeTab.value === 'unmastered') return wrongAnswers.value.filter(w => !w.mastered)
  if (activeTab.value === 'mastered') return wrongAnswers.value.filter(w => w.mastered)
  return wrongAnswers.value
})

function getQuizTitle(quizId) {
  const q = quizzes.find(q => q.id === quizId)
  return q?.title || '未知测验'
}

function doMaster(id) { masterWrongAnswer(id) }
function doRemove(id) { removeWrongAnswer(id) }

// Redo logic
const redoQuestion = computed(() => {
  const item = wrongAnswers.value.find(w => w.id === redoingId.value)
  if (!item) return null
  for (const quiz of quizzes) {
    const found = quiz.questions?.find(q => q.id === item.questionId)
    if (found) return found
  }
  return null
})

function startRedo(item) {
  redoingId.value = item.id
  redoSelected.value = null
  redoConfirmed.value = false
  redoCorrect.value = false
}

function selectRedoOption(idx) {
  if (redoConfirmed.value) return
  redoSelected.value = idx
}

function redoOptionClass(idx) {
  if (!redoConfirmed.value) return { selected: redoSelected.value === idx }
  const q = redoQuestion.value
  if (!q) return {}
  const classes = {}
  if (idx === q.answer) classes.correct = true
  if (redoSelected.value === idx && idx !== q.answer) classes.wrong = true
  return classes
}

function confirmRedo() {
  if (redoSelected.value === null) return
  redoConfirmed.value = true
  const q = redoQuestion.value
  if (q && redoSelected.value === q.answer) {
    redoCorrect.value = true
    masterWrongAnswer(redoingId.value)
  } else {
    redoCorrect.value = false
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

.filter-tabs { display: flex; gap: 8px; }
.filter-tab {
  padding: 8px 16px; border-radius: 20px; font-size: 13px; font-weight: 600;
  border: 1px solid var(--border); background: var(--card-bg); color: var(--text-light);
  cursor: pointer; transition: all 0.15s ease;
}
.filter-tab:hover { border-color: var(--primary); color: var(--primary); }
.filter-tab.active { background: var(--primary); color: white; border-color: var(--primary); }

.wrong-card { border-left: 4px solid var(--red); }
.wrong-question { font-size: 15px; font-weight: 600; line-height: 1.6; }
.wrong-answers { font-size: 14px; }
.wrong-row { margin-bottom: 4px; }
.wrong-label { color: var(--text-muted); font-size: 13px; }
.wrong-value { font-weight: 500; }
.wrong-user { color: var(--red); }
.wrong-correct { color: var(--green); }
.wrong-explanation {
  padding: 12px 16px; background: var(--yellow-light);
  border-radius: var(--radius-sm); font-size: 13px; line-height: 1.7;
  border-left: 3px solid var(--yellow);
}
.wrong-actions { flex-wrap: wrap; }
.redo-section { padding: 16px; background: var(--primary-bg); border-radius: var(--radius-sm); }
.redo-question { font-weight: 600; font-size: 14px; margin-bottom: 4px; }
.btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }
</style>
