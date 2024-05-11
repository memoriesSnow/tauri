import Homepage from '../homepage.vue'
import Start from '../views/start.vue'
import What from '../views/what.vue'
import Prepare from '../views/prepare.vue'
import Compare from '../views/compare.vue'
import Problem from '../views/problem.vue'

const routes = [
  {
    name: 'homepage',
    path: '/',
    component: Homepage,
    redirect:'/start',
    children: [
      {
        name: 'start',
        path: '/start',
        component: Start
      },
      {
        name: 'what',
        path: '/what',
        component: What
      },
      {
        name: 'prepare',
        path: '/prepare',
        component: Prepare
      },
      {
        name: 'compare',
        path: '/compare',
        component: Compare
      },
      {
        name: 'problem',
        path: '/problem',
        component: Problem
      }
    ]
  }
]

export default routes