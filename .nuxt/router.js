import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4b42861c = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _1c9a1a71 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _0300b290 = () => interopDefault(import('..\\pages\\admin\\blog\\index.vue' /* webpackChunkName: "pages/admin/blog/index" */))
const _cb035742 = () => interopDefault(import('..\\pages\\admin\\blog\\add.vue' /* webpackChunkName: "pages/admin/blog/add" */))
const _6112debc = () => interopDefault(import('..\\pages\\admin\\blog\\edit.vue' /* webpackChunkName: "pages/admin/blog/edit" */))
const _27da1161 = () => interopDefault(import('..\\pages\\blog\\_id\\_slug\\index.vue' /* webpackChunkName: "pages/blog/_id/_slug/index" */))
const _5d97e193 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _4b42861c,
    name: "admin"
  }, {
    path: "/blog",
    component: _1c9a1a71,
    name: "blog"
  }, {
    path: "/admin/blog",
    component: _0300b290,
    name: "admin-blog"
  }, {
    path: "/admin/blog/add",
    component: _cb035742,
    name: "admin-blog-add"
  }, {
    path: "/admin/blog/edit",
    component: _6112debc,
    name: "admin-blog-edit"
  }, {
    path: "/blog/:id/:slug",
    component: _27da1161,
    name: "blog-id-slug"
  }, {
    path: "/",
    component: _5d97e193,
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
