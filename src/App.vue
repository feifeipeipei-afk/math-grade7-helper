<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import state from './stores/learning.js'

const route = useRoute()
const router = useRouter()

const navItems = [
  { path: '/', label: '首页', icon: '🏠' },
  { path: '/unit/1', label: '第一章', icon: '🔢', subtitle: '有理数' },
  { path: '/unit/2', label: '第二章', icon: '📐', subtitle: '整式的加减' },
  { path: '/unit/3', label: '第三章', icon: '🔣', subtitle: '一元一次方程' },
  { path: '/unit/4', label: '第四章', icon: '📏', subtitle: '几何图形初步' },
  { path: '/wrong-answers', label: '错题集', icon: '📝' },
]

const isActive = (path) => {
  if (path === '/') return route.path === '/'
  return route.path === path || route.path.startsWith(path + '/')
}

const streak = computed(() => {
  if (state.checkins.length === 0) return 0
  const sorted = [...state.checkins].sort().reverse()
  let s = 1
  for (let i = 0; i < sorted.length - 1; i++) {
    const d1 = new Date(sorted[i])
    const d2 = new Date(sorted[i + 1])
    const diff = (d1 - d2) / (1000 * 60 * 60 * 24)
    if (diff === 1) s++
    else break
  }
  const today = new Date().toISOString().slice(0, 10)
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10)
  if (sorted[0] !== today && sorted[0] !== yesterday) return 0
  return s
})

const todayChecked = computed(() => {
  const today = new Date().toISOString().slice(0, 10)
  return state.checkins.includes(today)
})
</script>

<template>
  <div class="app-layout">
    <aside class="sidebar">
      <div class="sidebar-logo">
        <h1>数学七上学习助手</h1>
        <p>人教版 · 七年级上册</p>
      </div>

      <nav class="sidebar-nav">
        <div
          v-for="item in navItems"
          :key="item.path"
          class="nav-item"
          :class="{ active: isActive(item.path) }"
          @click="router.push(item.path)"
        >
          <span class="nav-icon">{{ item.icon }}</span>
          <div>
            <div>{{ item.label }}</div>
            <div v-if="item.subtitle" class="nav-subtitle">{{ item.subtitle }}</div>
          </div>
        </div>
      </nav>

      <div class="sidebar-footer">
        <div class="streak-info">
          <span v-if="todayChecked" class="streak-badge active">🔥 连续 {{ streak }} 天</span>
          <span v-else class="streak-badge">今天还没学习哦</span>
        </div>
      </div>
    </aside>

    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style scoped>
.nav-subtitle {
  font-size: 11px;
  color: var(--text-muted);
  margin-top: 1px;
}

.sidebar-footer {
  padding: 16px 24px;
  border-top: 1px solid var(--border);
  margin-top: auto;
}

.streak-badge {
  font-size: 13px;
  color: var(--text-muted);
}

.streak-badge.active {
  color: #E65100;
  font-weight: 600;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
