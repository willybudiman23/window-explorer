import { createRouter, createWebHistory } from 'vue-router'
import ExplorerView from '@/views/ExplorerView.vue'

const routes = [
  {
    path: '/',
    name: 'folders',
    component: ExplorerView,
  },
  {
    path: '/:folderId(\\d+)',
    name: 'folder',
    component: ExplorerView,
    props: true, // Pass route params as props
  },
  {
    path: '/:pathMatch(.*)*', // Catch-all route for 404
    redirect: { name: 'folders' }, // Redirect to folders
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
