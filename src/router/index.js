import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import login from '@/pages/login'
import qr from '@/pages/qr'

import studentCalendar from '@/pages/student/calendar'
import studentProfile from '@/pages/student/profile'

import teacherCalendar from '@/pages/teacher/calendar'
import teacherProfile from '@/pages/teacher/profile'
import teacherLesson from '@/pages/teacher/lesson'
import teacherGroups from '@/pages/teacher/groups'
import teacherGroup from '@/pages/teacher/group'

import ui from '@/pages/ui'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/sign',
    },
    {
      path: '/sign',
      name: 'login',
      component: login
    },
    {
      path: '/qr/:id',
      name: 'login',
      component: qr
    },
    {
      path: '/student/calendar',
      name: 'student',
      component: studentCalendar
    },
    {
      path: '/student/profile',
      name: 'student',
      component: studentProfile
    },
    {
      path: '/teacher/profile',
      name: 'teacher',
      component: teacherProfile
    },
    {
      path: '/teacher/calendar',
      name: 'teacher',
      component: teacherCalendar
    },
    {
      path: '/teacher/lesson/:id',
      name: 'teacher',
      component: teacherLesson
    },
    {
      path: '/teacher/group',
      name: 'teacher',
      component: teacherGroups
    },
    {
      path: '/teacher/group/:id',
      name: 'teacher',
      component: teacherGroup
    },
    {
      path: '/ui',
      name: 'ui',
      component: ui
    }
  ]
})
