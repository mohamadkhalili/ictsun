import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0f38bc21 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _58080d3c = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _7c64527f = () => interopDefault(import('..\\pages\\admin\\blog\\index.vue' /* webpackChunkName: "pages/admin/blog/index" */))
const _7251b7e4 = () => interopDefault(import('..\\pages\\admin\\blog\\add.vue' /* webpackChunkName: "pages/admin/blog/add" */))
const _8057f626 = () => interopDefault(import('..\\pages\\admin\\blog\\edit.vue' /* webpackChunkName: "pages/admin/blog/edit" */))
const _028fe25c = () => interopDefault(import('..\\pages\\blog\\_id\\_slug\\index.vue' /* webpackChunkName: "pages/blog/_id/_slug/index" */))
const _8077ed78 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _0f38bc21,
    name: "admin"
  }, {
    path: "/blog",
    component: _58080d3c,
    name: "blog"
  }, {
    path: "/admin/blog",
    component: _7c64527f,
    name: "admin-blog"
  }, {
    path: "/admin/blog/add",
    component: _7251b7e4,
    name: "admin-blog-add"
  }, {
    path: "/admin/blog/edit",
    component: _8057f626,
    name: "admin-blog-edit"
  }, {
    path: "/blog/:id/:slug",
    component: _028fe25c,
    name: "blog-id-slug"
  }, {
    path: "/",
    component: _8077ed78,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
