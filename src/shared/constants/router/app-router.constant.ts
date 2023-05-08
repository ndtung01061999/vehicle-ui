import { KHOA_ROUTER } from "./khoa-router.constant";
import { STUDENT_ROUTER } from "./student-router.constant";

export const APP_ROUTER_CONST = {
  layout: {
    path: '/',
    roles: [],
    childrens: {
      overview: {
        path: '/overview',
        roles: [],
      },
      student: STUDENT_ROUTER,
      khoa: KHOA_ROUTER
    }
  },
  nonfound: {
    path: '/404'
  },
  login: {
    path: '/login'
  },
  authCallback: {
    path: '/auth/callback'
  },
  all: {
    path: '*'
  }
}