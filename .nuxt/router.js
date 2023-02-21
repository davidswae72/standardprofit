import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b33c15d6 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _35e880cb = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _cf944fb0 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _52c2a8d2 = () => interopDefault(import('..\\pages\\copytrade.vue' /* webpackChunkName: "pages/copytrade" */))
const _fdbbf734 = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _a1ebe7c4 = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages/faq" */))
const _5ee8442e = () => interopDefault(import('..\\pages\\help.vue' /* webpackChunkName: "pages/help" */))
const _7332be41 = () => interopDefault(import('..\\pages\\legal.vue' /* webpackChunkName: "pages/legal" */))
const _7867e071 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _32336f5a = () => interopDefault(import('..\\pages\\policy.vue' /* webpackChunkName: "pages/policy" */))
const _a3fff452 = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages/register/index" */))
const _324a6be4 = () => interopDefault(import('..\\pages\\resolve\\index.vue' /* webpackChunkName: "pages/resolve/index" */))
const _70178e0f = () => interopDefault(import('..\\pages\\terms.vue' /* webpackChunkName: "pages/terms" */))
const _370a7524 = () => interopDefault(import('..\\pages\\whyus.vue' /* webpackChunkName: "pages/whyus" */))
const _049ee548 = () => interopDefault(import('..\\pages\\admin\\account\\index.vue' /* webpackChunkName: "pages/admin/account/index" */))
const _712df954 = () => interopDefault(import('..\\pages\\admin\\deposits\\index.vue' /* webpackChunkName: "pages/admin/deposits/index" */))
const _f6f891d0 = () => interopDefault(import('..\\pages\\admin\\investment\\index.vue' /* webpackChunkName: "pages/admin/investment/index" */))
const _6a0d1e08 = () => interopDefault(import('..\\pages\\admin\\loans.vue' /* webpackChunkName: "pages/admin/loans" */))
const _3701606e = () => interopDefault(import('..\\pages\\admin\\loans.vue\\index.vue' /* webpackChunkName: "pages/admin/loans.vue/index" */))
const _23a6c481 = () => interopDefault(import('..\\pages\\admin\\notifications\\index.vue' /* webpackChunkName: "pages/admin/notifications/index" */))
const _870d95c4 = () => interopDefault(import('..\\pages\\admin\\otp\\index.vue' /* webpackChunkName: "pages/admin/otp/index" */))
const _49010008 = () => interopDefault(import('..\\pages\\admin\\settings\\index.vue' /* webpackChunkName: "pages/admin/settings/index" */))
const _25820b01 = () => interopDefault(import('..\\pages\\admin\\transfers\\index.vue' /* webpackChunkName: "pages/admin/transfers/index" */))
const _0cd6733e = () => interopDefault(import('..\\pages\\admin\\users\\index.vue' /* webpackChunkName: "pages/admin/users/index" */))
const _07b90290 = () => interopDefault(import('..\\pages\\admin\\verification\\index.vue' /* webpackChunkName: "pages/admin/verification/index" */))
const _365241de = () => interopDefault(import('..\\pages\\admin\\victims\\index.vue' /* webpackChunkName: "pages/admin/victims/index" */))
const _4cfe2ac1 = () => interopDefault(import('..\\pages\\admin\\withdraw\\index.vue' /* webpackChunkName: "pages/admin/withdraw/index" */))
const _7417a7a0 = () => interopDefault(import('..\\pages\\admin\\withdraws\\index.vue' /* webpackChunkName: "pages/admin/withdraws/index" */))
const _801c2fbe = () => interopDefault(import('..\\pages\\dashboard\\account\\index.vue' /* webpackChunkName: "pages/dashboard/account/index" */))
const _91ce49e0 = () => interopDefault(import('..\\pages\\dashboard\\deposit\\index.vue' /* webpackChunkName: "pages/dashboard/deposit/index" */))
const _1acbd4b2 = () => interopDefault(import('..\\pages\\dashboard\\home\\index.vue' /* webpackChunkName: "pages/dashboard/home/index" */))
const _712240f6 = () => interopDefault(import('..\\pages\\dashboard\\loan\\index.vue' /* webpackChunkName: "pages/dashboard/loan/index" */))
const _fc84b9b6 = () => interopDefault(import('..\\pages\\dashboard\\profile\\index.vue' /* webpackChunkName: "pages/dashboard/profile/index" */))
const _7b42793f = () => interopDefault(import('..\\pages\\dashboard\\support\\index.vue' /* webpackChunkName: "pages/dashboard/support/index" */))
const _27d571f7 = () => interopDefault(import('..\\pages\\dashboard\\trades\\index.vue' /* webpackChunkName: "pages/dashboard/trades/index" */))
const _0c787f71 = () => interopDefault(import('..\\pages\\dashboard\\transactions\\index.vue' /* webpackChunkName: "pages/dashboard/transactions/index" */))
const _3e3955ca = () => interopDefault(import('..\\pages\\dashboard\\transfer\\index.vue' /* webpackChunkName: "pages/dashboard/transfer/index" */))
const _5a2faec8 = () => interopDefault(import('..\\pages\\dashboard\\withdraw\\index.vue' /* webpackChunkName: "pages/dashboard/withdraw/index" */))
const _14442416 = () => interopDefault(import('..\\pages\\password\\new\\index.vue' /* webpackChunkName: "pages/password/new/index" */))
const _1b812826 = () => interopDefault(import('..\\pages\\password\\reset\\index.vue' /* webpackChunkName: "pages/password/reset/index" */))
const _36da3f2d = () => interopDefault(import('..\\pages\\trade\\crypto.vue' /* webpackChunkName: "pages/trade/crypto" */))
const _2d98fe00 = () => interopDefault(import('..\\pages\\trade\\forex.vue' /* webpackChunkName: "pages/trade/forex" */))
const _18e73f3c = () => interopDefault(import('..\\pages\\trade\\options.vue' /* webpackChunkName: "pages/trade/options" */))
const _5581204c = () => interopDefault(import('..\\pages\\trade\\stock.vue' /* webpackChunkName: "pages/trade/stock" */))
const _7001dccc = () => interopDefault(import('..\\pages\\dashboard\\wallet\\fund.vue' /* webpackChunkName: "pages/dashboard/wallet/fund" */))
const _64938b56 = () => interopDefault(import('..\\pages\\dashboard\\wallet\\upin.vue' /* webpackChunkName: "pages/dashboard/wallet/upin" */))
const _3040a8df = () => interopDefault(import('..\\pages\\dashboard\\wallet\\withdraw.vue' /* webpackChunkName: "pages/dashboard/wallet/withdraw" */))
const _1f399639 = () => interopDefault(import('..\\pages\\admin\\users\\_user.vue' /* webpackChunkName: "pages/admin/users/_user" */))
const _73cc604c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _b33c15d6,
    name: "about"
  }, {
    path: "/admin",
    component: _35e880cb,
    name: "admin"
  }, {
    path: "/contact",
    component: _cf944fb0,
    name: "contact"
  }, {
    path: "/copytrade",
    component: _52c2a8d2,
    name: "copytrade"
  }, {
    path: "/dashboard",
    component: _fdbbf734,
    name: "dashboard"
  }, {
    path: "/faq",
    component: _a1ebe7c4,
    name: "faq"
  }, {
    path: "/help",
    component: _5ee8442e,
    name: "help"
  }, {
    path: "/legal",
    component: _7332be41,
    name: "legal"
  }, {
    path: "/login",
    component: _7867e071,
    name: "login"
  }, {
    path: "/policy",
    component: _32336f5a,
    name: "policy"
  }, {
    path: "/register",
    component: _a3fff452,
    name: "register"
  }, {
    path: "/resolve",
    component: _324a6be4,
    name: "resolve"
  }, {
    path: "/terms",
    component: _70178e0f,
    name: "terms"
  }, {
    path: "/whyus",
    component: _370a7524,
    name: "whyus"
  }, {
    path: "/admin/account",
    component: _049ee548,
    name: "admin-account"
  }, {
    path: "/admin/deposits",
    component: _712df954,
    name: "admin-deposits"
  }, {
    path: "/admin/investment",
    component: _f6f891d0,
    name: "admin-investment"
  }, {
    path: "/admin/loans",
    component: _6a0d1e08,
    name: "admin-loans"
  }, {
    path: "/admin/loans.vue",
    component: _3701606e,
    name: "admin-loans.vue"
  }, {
    path: "/admin/notifications",
    component: _23a6c481,
    name: "admin-notifications"
  }, {
    path: "/admin/otp",
    component: _870d95c4,
    name: "admin-otp"
  }, {
    path: "/admin/settings",
    component: _49010008,
    name: "admin-settings"
  }, {
    path: "/admin/transfers",
    component: _25820b01,
    name: "admin-transfers"
  }, {
    path: "/admin/users",
    component: _0cd6733e,
    name: "admin-users"
  }, {
    path: "/admin/verification",
    component: _07b90290,
    name: "admin-verification"
  }, {
    path: "/admin/victims",
    component: _365241de,
    name: "admin-victims"
  }, {
    path: "/admin/withdraw",
    component: _4cfe2ac1,
    name: "admin-withdraw"
  }, {
    path: "/admin/withdraws",
    component: _7417a7a0,
    name: "admin-withdraws"
  }, {
    path: "/dashboard/account",
    component: _801c2fbe,
    name: "dashboard-account"
  }, {
    path: "/dashboard/deposit",
    component: _91ce49e0,
    name: "dashboard-deposit"
  }, {
    path: "/dashboard/home",
    component: _1acbd4b2,
    name: "dashboard-home"
  }, {
    path: "/dashboard/loan",
    component: _712240f6,
    name: "dashboard-loan"
  }, {
    path: "/dashboard/profile",
    component: _fc84b9b6,
    name: "dashboard-profile"
  }, {
    path: "/dashboard/support",
    component: _7b42793f,
    name: "dashboard-support"
  }, {
    path: "/dashboard/trades",
    component: _27d571f7,
    name: "dashboard-trades"
  }, {
    path: "/dashboard/transactions",
    component: _0c787f71,
    name: "dashboard-transactions"
  }, {
    path: "/dashboard/transfer",
    component: _3e3955ca,
    name: "dashboard-transfer"
  }, {
    path: "/dashboard/withdraw",
    component: _5a2faec8,
    name: "dashboard-withdraw"
  }, {
    path: "/password/new",
    component: _14442416,
    name: "password-new"
  }, {
    path: "/password/reset",
    component: _1b812826,
    name: "password-reset"
  }, {
    path: "/trade/crypto",
    component: _36da3f2d,
    name: "trade-crypto"
  }, {
    path: "/trade/forex",
    component: _2d98fe00,
    name: "trade-forex"
  }, {
    path: "/trade/options",
    component: _18e73f3c,
    name: "trade-options"
  }, {
    path: "/trade/stock",
    component: _5581204c,
    name: "trade-stock"
  }, {
    path: "/dashboard/wallet/fund",
    component: _7001dccc,
    name: "dashboard-wallet-fund"
  }, {
    path: "/dashboard/wallet/upin",
    component: _64938b56,
    name: "dashboard-wallet-upin"
  }, {
    path: "/dashboard/wallet/withdraw",
    component: _3040a8df,
    name: "dashboard-wallet-withdraw"
  }, {
    path: "/admin/users/:user",
    component: _1f399639,
    name: "admin-users-user"
  }, {
    path: "/",
    component: _73cc604c,
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
