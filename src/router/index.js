import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: { title: '首页' }
  },
  {
    path: '/unit/:id',
    name: 'unit',
    component: () => import('../views/UnitView.vue'),
    meta: { title: '章节详情' }
  },
  {
    path: '/lesson/:id',
    name: 'lesson',
    component: () => import('../views/LessonView.vue'),
    meta: { title: '课时学习' }
  },
  {
    path: '/quiz/result',
    name: 'quizResult',
    component: () => import('../views/QuizResult.vue'),
    meta: { title: '答题结果' }
  },
  {
    path: '/quiz',
    name: 'reviewQuiz',
    component: () => import('../views/QuizView.vue'),
    meta: { title: '综合测验' }
  },
  {
    path: '/quiz/:lessonId',
    name: 'quiz',
    component: () => import('../views/QuizView.vue'),
    meta: { title: '答题闯关' }
  },
  {
    path: '/wrong-answers',
    name: 'wrongAnswers',
    component: () => import('../views/WrongAnswers.vue'),
    meta: { title: '错题集' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
