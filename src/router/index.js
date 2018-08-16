import Vue from 'vue'
import Router from 'vue-router'
import IndexWrap from '@/components/indexWrap'

import Login from '@/components/login/login'

import HomePage from '@/components/homePage'

import ProductCenter from '@/components/product/productCenter'
import ProductDetail from '@/components/product/productDetail'
import ProductInfo from '@/components/product/productInfo'

import MapSearch from '@/components/mapSearch/mapSearch'

import MainWrap from '@/components/mainWrap'

import AboutUs from '@/components/aboutUs/aboutUs'
import AboutUsCourse from '@/components/aboutUs/aboutUsCourse'
import AboutUsBrief from '@/components/aboutUs/aboutUsBrief'
import AboutUsHonor from '@/components/aboutUs/aboutUsHonor'

import JoinUs from '@/components/joinUs/joinUs'
import JoinUsList from '@/components/joinUs/joinUsList'
import JoinUsDetail from '@/components/joinUs/joinUsDetail'

import MessageAdvice from '@/components/messageAdvice/messageAdvice'

import InformationCenter from '@/components/information/informationCenter'
import InformationDetail from '@/components/information/informationDetail'

import PersonCenter from '@/components/personCenter/personCenter'
import PersonShopping from '@/components/personCenter/personShopping/personShopping'
import PersonCollect from '@/components/personCenter/personCollect/personCollect'
import PersonHelp from '@/components/personCenter/personHelp/personHelp'
import PersonAppointment from '@/components/personCenter/personAppointment/personAppointment'
import PersonFootPrint from '@/components/personCenter/personFootPrint/personFootPrint'

Vue.use(Router)

export default new Router({
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      redirect:'/homePage',
    },
    {
      path: '/upload',
      component:() =>import('@/components/upload/upload')
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/indexWrap',
      name: 'IndexWrap',
      component: IndexWrap
    },
    {
      path: '/homePage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/productCenter',
      name: 'ProductCenter',
      component: ProductCenter,
      redirect: '/productCenter/productDetail',
      children:[
        {
          path: '/productCenter/productDetail',
          name: 'ProductDetail',
          component: ProductDetail
        },
        {
          path: '/productCenter/productInfo',
          name: 'ProductInfo',
          component: ProductInfo
        },
        {
          path: '/productCenter/mapSearch',
          name: 'MapSearch',
          component:() =>import('@/components/mapSearch/mapSearch')
        }
      ]
    },
    {
      path:'/mainWrap',
      name:'MainWrap',
      component: MainWrap,
      children:[
        {
          path:'/mainWrap/aboutUs',
          name: 'AboutUs',
          component: AboutUs,
          redirect:'/mainWrap/aboutUs/aboutUsBrief',
          children:[
            {
              path: '/mainWrap/aboutUs/aboutUsBrief',
              name: 'AboutUsBrief',
              component: AboutUsBrief
            },
            {
              path: '/mainWrap/aboutUs/aboutUsCourse',
              name: 'AboutUsCourse',
              component: AboutUsCourse
            },
            {
              path: '/mainWrap/aboutUs/aboutUsHonor',
              name: 'AboutUsHonor',
              component: AboutUsHonor
            }
          ]
        },
        {
          path: '/mainWrap/joinUs',
          name: 'JoinUs',
          component: JoinUs,
          redirect: '/mainWrap/joinUs/joinUsList',
          children:[
            {
              path: '/mainWrap/joinUs/joinUsList',
              name: 'JoinUsList',
              component:JoinUsList
            },
            {
              path: '/mainWrap/joinUs/joinUsDetail',
              name: 'JoinUsDetail',
              component: JoinUsDetail
            }
          ]
        },
        {
          path: '/mainWrap/messageAdvice',
          name: 'MessageAdvice',
          component: MessageAdvice
        },
        {
          path: '/mainWrap/informationCenter',
          name: 'InformationCenter',
          component: InformationCenter
        },
        {
          path: '/mainWrap/informationDetail',
          name: 'InformationDetail',
          component: InformationDetail
        }
      ]
    },
    {
      path: '/personCenter',
      name: 'PersonCenter',
      component: PersonCenter,
      children:[
        {
          path: '/personCenter/personShopping',
          name: 'PersonShopping',
          component: PersonShopping
        },
        {
          path: '/personCenter/personCollect',
          name: 'PersonCollect',
          component: PersonCollect
        },
        {
          path: '/personCenter/personHelp',
          name: 'PersonHelp',
          component: PersonHelp
        },
        {
          path: '/personCenter/personAppointment',
          name: 'PersonAppointment',
          component: PersonAppointment
        },
        {
          path: '/personCenter/personFootPrint',
          name: 'PersonFootPrint',
          component: PersonFootPrint
        },
        {
          path: '/personCenter/personFundCenter',
          name: 'PersonFundCenter',
          component:() => import('@/components/personCenter/personFund/personFundCenter'),
          meta:{
            title: '资金中心'
          },
          redirect: '/personCenter/personFundCenter/personFundIndex',
          children:[
            {
              path: '/personCenter/personFundCenter/personFundIndex',
              name: 'PersonFundIndex',
              component:() => import('@/components/personCenter/personFund/personFundIndex/personFundIndex'),
              meta:{
                title: '资金中心导航栏'
              }
            },
            {
              path: '/personCenter/personFundCenter/myWalletRecharge',
              name: 'MyWalletRecharge',
              component:() => import('@/components/personCenter/personFund/personFundIndex/myWallet/myWalletRecharge'),
              meta:{
                title:'我的钱包-充值'
              }
            },
            {
              path: '/personCenter/personFundCenter/myBillDetail',
              name: 'MyBillDetail',
              component:() => import('@/components/personCenter/personFund/personFundIndex/myBill/myBillDetail'),
              meta:{
                title:'我的账单-账单详情'
              }
            },
            {
              path: '/personCenter/personFundCenter/myBillReceipt',
              name: 'MyBillReceipt',
              component:() => import('@/components/personCenter/personFund/personFundIndex/myBill/myBillReceipt'),
              meta:{
                title:'我的账单-账单详情-收据'
              }
            },
            {
              path: '/personCenter/personFundCenter/cashPledgeDetail',
              name: 'CashPledgeDetail',
              component:() => import('@/components/personCenter/personFund/personFundIndex/cashPledge/cashPledgeDetail'),
              meta:{
                title:'我的押金-押金详情'
              }
            },
            {
              path: '/personCenter/personFundCenter/cashPledgeReceipt',
              name: 'CashPledgeReceipt',
              component:() => import('@/components/personCenter/personFund/personFundIndex/cashPledge/cashPledgeReceipt'),
              meta:{
                title:'我的押金-押金详情-收据'
              }
            }
          ]
        },
        {
          path: '/personCenter/accountSetting',
          name: 'AccountSetting',
          component:() =>import('@/components/personCenter/accountSetting/accountSetting'),
          meta:{
            title: '账户设置'
          },
          redirect: '/personCenter/accountSetting/accountIndex',
          children:[
            {
              path: '/personCenter/accountSetting/accountIndex',
              name: 'AccountIndex',
              component:() =>import('@/components/personCenter/accountSetting/accountIndex/accountIndex'),
              meta:{
                title: '账户设置导航栏'
              }
            },
            {
              path: '/personCenter/accountSetting/safetyDetail',
              name: 'SafetyDetail',
              component:() =>import('@/components/personCenter/accountSetting/accountIndex/safety/safetyDetail'),
              meta:{
                title: '账号安全-修改'
              }
            }
          ]
        }
      ]
    },
  ]
})
