import Vue from 'vue'
import Router from 'vue-router'

import IndexPage from '../pages/Index.vue'
import DetailPage from '../pages/Detail.vue'
import DetailAnaPage from '../pages/detail/Analysis.vue'
import DetailCouPage from '../pages/detail/Count.vue'
import DetailForPage from '../pages/detail/Forecast.vue'
import DetailPubPage from '../pages/detail/Publish.vue'
import OrderListPage from '../pages/OrderList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage
    },
    {
      path: '/detail',
      component: DetailPage,
      redirect: '/detail/analysis',
      children: [
        {
          path: 'analysis',
          component: DetailAnaPage
        },
        {
          path: 'count',
          component: DetailCouPage
        },
        {
          path: 'forecast',
          component: DetailForPage
        },
        {
          path: 'publish',
          component: DetailPubPage
        }
      ]
    },
    {
      path: '/orderList',
      component: OrderListPage
    }
  ]
})
