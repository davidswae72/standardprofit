import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _083f4d81 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _a851d242 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _0fc274d8 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _3ffc23fa = () => interopDefault(import('..\\pages\\copytrade.vue' /* webpackChunkName: "pages/copytrade" */))
const _da211f0c = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _4afa8f8a = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages/faq" */))
const _9aa87006 = () => interopDefault(import('..\\pages\\help.vue' /* webpackChunkName: "pages/help" */))
const _55dfd2a6 = () => interopDefault(import('..\\pages\\legal.vue' /* webpackChunkName: "pages/legal" */))
const _235312f6 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _0c01246e = () => interopDefault(import('..\\pages\\policy.vue' /* webpackChunkName: "pages/policy" */))
const _e4ea717a = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages/register/index" */))
const _c907a9bc = () => interopDefault(import('..\\pages\\resolve\\index.vue' /* webpackChunkName: "pages/resolve/index" */))
const _5c16330a = () => interopDefault(import('..\\pages\\terms.vue' /* webpackChunkName: "pages/terms" */))
const _46581dda = () => interopDefault(import('..\\pages\\whyus.vue' /* webpackChunkName: "pages/whyus" */))
const _71878dc8 = () => interopDefault(import('..\\pages\\admin\\account\\index.vue' /* webpackChunkName: "pages/admin/account/index" */))
const _631bdf2c = () => interopDefault(import('..\\pages\\admin\\deposits\\index.vue' /* webpackChunkName: "pages/admin/deposits/index" */))
const _250461a8 = () => interopDefault(import('..\\pages\\admin\\investment\\index.vue' /* webpackChunkName: "pages/admin/investment/index" */))
const _40e80710 = () => interopDefault(import('..\\pages\\admin\\loans.vue' /* webpackChunkName: "pages/admin/loans" */))
const _1119f5da = () => interopDefault(import('..\\pages\\admin\\loans.vue\\index.vue' /* webpackChunkName: "pages/admin/loans.vue/index" */))
const _6b5ec3ed = () => interopDefault(import('..\\pages\\admin\\notifications\\index.vue' /* webpackChunkName: "pages/admin/notifications/index" */))
const _374d68ec = () => interopDefault(import('..\\pages\\admin\\otp\\index.vue' /* webpackChunkName: "pages/admin/otp/index" */))
const _500a0d1c = () => interopDefault(import('..\\pages\\admin\\settings\\index.vue' /* webpackChunkName: "pages/admin/settings/index" */))
const _00cabf26 = () => interopDefault(import('..\\pages\\admin\\transfers\\index.vue' /* webpackChunkName: "pages/admin/transfers/index" */))
const _ac6e1c66 = () => interopDefault(import('..\\pages\\admin\\users\\index.vue' /* webpackChunkName: "pages/admin/users/index" */))
const _1a8d65a4 = () => interopDefault(import('..\\pages\\admin\\verification\\index.vue' /* webpackChunkName: "pages/admin/verification/index" */))
const _abad7b6c = () => interopDefault(import('..\\pages\\admin\\victims\\index.vue' /* webpackChunkName: "pages/admin/victims/index" */))
const _540737d5 = () => interopDefault(import('..\\pages\\admin\\withdraw\\index.vue' /* webpackChunkName: "pages/admin/withdraw/index" */))
const _4e303d0c = () => interopDefault(import('..\\pages\\admin\\withdraws\\index.vue' /* webpackChunkName: "pages/admin/withdraws/index" */))
const _763ad28d = () => interopDefault(import('..\\pages\\dashboard\\account\\index.vue' /* webpackChunkName: "pages/dashboard/account/index" */))
const _6d61c57c = () => interopDefault(import('..\\pages\\dashboard\\deposit\\index.vue' /* webpackChunkName: "pages/dashboard/deposit/index" */))
const _0cb9ba8a = () => interopDefault(import('..\\pages\\dashboard\\home\\index.vue' /* webpackChunkName: "pages/dashboard/home/index" */))
const _782b4e0a = () => interopDefault(import('..\\pages\\dashboard\\loan\\index.vue' /* webpackChunkName: "pages/dashboard/loan/index" */))
const _38068d91 = () => interopDefault(import('..\\pages\\dashboard\\profile\\index.vue' /* webpackChunkName: "pages/dashboard/profile/index" */))
const _318b63ab = () => interopDefault(import('..\\pages\\dashboard\\support\\index.vue' /* webpackChunkName: "pages/dashboard/support/index" */))
const _de60ebea = () => interopDefault(import('..\\pages\\dashboard\\trades\\index.vue' /* webpackChunkName: "pages/dashboard/trades/index" */))
const _097d3885 = () => interopDefault(import('..\\pages\\dashboard\\transactions\\index.vue' /* webpackChunkName: "pages/dashboard/transactions/index" */))
const _18908fa2 = () => interopDefault(import('..\\pages\\dashboard\\transfer\\index.vue' /* webpackChunkName: "pages/dashboard/transfer/index" */))
const _3486e8a0 = () => interopDefault(import('..\\pages\\dashboard\\withdraw\\index.vue' /* webpackChunkName: "pages/dashboard/withdraw/index" */))
const _4c2f3009 = () => interopDefault(import('..\\pages\\password\\new\\index.vue' /* webpackChunkName: "pages/password/new/index" */))
const _228a353a = () => interopDefault(import('..\\pages\\password\\reset\\index.vue' /* webpackChunkName: "pages/password/reset/index" */))
const _7ebe6b99 = () => interopDefault(import('..\\pages\\trade\\crypto.vue' /* webpackChunkName: "pages/trade/crypto" */))
const _5f221714 = () => interopDefault(import('..\\pages\\trade\\forex.vue' /* webpackChunkName: "pages/trade/forex" */))
const _afa47d14 = () => interopDefault(import('..\\pages\\trade\\options.vue' /* webpackChunkName: "pages/trade/options" */))
const _4b2e05ee = () => interopDefault(import('..\\pages\\trade\\stock.vue' /* webpackChunkName: "pages/trade/stock" */))
const _bbd0b1f4 = () => interopDefault(import('..\\pages\\dashboard\\wallet\\fund.vue' /* webpackChunkName: "pages/dashboard/wallet/fund" */))
const _b062607e = () => interopDefault(import('..\\pages\\dashboard\\wallet\\upin.vue' /* webpackChunkName: "pages/dashboard/wallet/upin" */))
const _77f8a84b = () => interopDefault(import('..\\pages\\dashboard\\wallet\\withdraw.vue' /* webpackChunkName: "pages/dashboard/wallet/withdraw" */))
const _61247cb6 = () => interopDefault(import('..\\pages\\admin\\users\\_user.vue' /* webpackChunkName: "pages/admin/users/_user" */))
const _27f72846 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _083f4d81,
    name: "about"
  }, {
    path: "/admin",
    component: _a851d242,
    name: "admin"
  }, {
    path: "/contact",
    component: _0fc274d8,
    name: "contact"
  }, {
    path: "/copytrade",
    component: _3ffc23fa,
    name: "copytrade"
  }, {
    path: "/dashboard",
    component: _da211f0c,
    name: "dashboard"
  }, {
    path: "/faq",
    component: _4afa8f8a,
    name: "faq"
  }, {
    path: "/help",
    component: _9aa87006,
    name: "help"
  }, {
    path: "/legal",
    component: _55dfd2a6,
    name: "legal"
  }, {
    path: "/login",
    component: _235312f6,
    name: "login"
  }, {
    path: "/policy",
    component: _0c01246e,
    name: "policy"
  }, {
    path: "/register",
    component: _e4ea717a,
    name: "register"
  }, {
    path: "/resolve",
    component: _c907a9bc,
    name: "resolve"
  }, {
    path: "/terms",
    component: _5c16330a,
    name: "terms"
  }, {
    path: "/whyus",
    component: _46581dda,
    name: "whyus"
  }, {
    path: "/admin/account",
    component: _71878dc8,
    name: "admin-account"
  }, {
    path: "/admin/deposits",
    component: _631bdf2c,
    name: "admin-deposits"
  }, {
    path: "/admin/investment",
    component: _250461a8,
    name: "admin-investment"
  }, {
    path: "/admin/loans",
    component: _40e80710,
    name: "admin-loans"
  }, {
    path: "/admin/loans.vue",
    component: _1119f5da,
    name: "admin-loans.vue"
  }, {
    path: "/admin/notifications",
    component: _6b5ec3ed,
    name: "admin-notifications"
  }, {
    path: "/admin/otp",
    component: _374d68ec,
    name: "admin-otp"
  }, {
    path: "/admin/settings",
    component: _500a0d1c,
    name: "admin-settings"
  }, {
    path: "/admin/transfers",
    component: _00cabf26,
    name: "admin-transfers"
  }, {
    path: "/admin/users",
    component: _ac6e1c66,
    name: "admin-users"
  }, {
    path: "/admin/verification",
    component: _1a8d65a4,
    name: "admin-verification"
  }, {
    path: "/admin/victims",
    component: _abad7b6c,
    name: "admin-victims"
  }, {
    path: "/admin/withdraw",
    component: _540737d5,
    name: "admin-withdraw"
  }, {
    path: "/admin/withdraws",
    component: _4e303d0c,
    name: "admin-withdraws"
  }, {
    path: "/dashboard/account",
    component: _763ad28d,
    name: "dashboard-account"
  }, {
    path: "/dashboard/deposit",
    component: _6d61c57c,
    name: "dashboard-deposit"
  }, {
    path: "/dashboard/home",
    component: _0cb9ba8a,
    name: "dashboard-home"
  }, {
    path: "/dashboard/loan",
    component: _782b4e0a,
    name: "dashboard-loan"
  }, {
    path: "/dashboard/profile",
    component: _38068d91,
    name: "dashboard-profile"
  }, {
    path: "/dashboard/support",
    component: _318b63ab,
    name: "dashboard-support"
  }, {
    path: "/dashboard/trades",
    component: _de60ebea,
    name: "dashboard-trades"
  }, {
    path: "/dashboard/transactions",
    component: _097d3885,
    name: "dashboard-transactions"
  }, {
    path: "/dashboard/transfer",
    component: _18908fa2,
    name: "dashboard-transfer"
  }, {
    path: "/dashboard/withdraw",
    component: _3486e8a0,
    name: "dashboard-withdraw"
  }, {
    path: "/password/new",
    component: _4c2f3009,
    name: "password-new"
  }, {
    path: "/password/reset",
    component: _228a353a,
    name: "password-reset"
  }, {
    path: "/trade/crypto",
    component: _7ebe6b99,
    name: "trade-crypto"
  }, {
    path: "/trade/forex",
    component: _5f221714,
    name: "trade-forex"
  }, {
    path: "/trade/options",
    component: _afa47d14,
    name: "trade-options"
  }, {
    path: "/trade/stock",
    component: _4b2e05ee,
    name: "trade-stock"
  }, {
    path: "/dashboard/wallet/fund",
    component: _bbd0b1f4,
    name: "dashboard-wallet-fund"
  }, {
    path: "/dashboard/wallet/upin",
    component: _b062607e,
    name: "dashboard-wallet-upin"
  }, {
    path: "/dashboard/wallet/withdraw",
    component: _77f8a84b,
    name: "dashboard-wallet-withdraw"
  }, {
    path: "/admin/users/:user",
    component: _61247cb6,
    name: "admin-users-user"
  }, {
    path: "/",
    component: _27f72846,
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
