import Vue from 'vue';
import VueRouter from 'vue-router';

import HtmlView from '../submenu/html/HtmlView.vue';
import GuideView from '../submenu/html/GuideLine.vue';
import SassView from '../submenu/html/SassView.vue';
import GitView from '../submenu/git/GitView.vue';
import JqueryView from '../submenu/jquery/JqueryView.vue';

import VueView from '../submenu/vue/VueView.vue';
import VueInstance from '../submenu/vue/vueview/VueInstance.vue';
import VueTemplate from '../submenu/vue/vueview/VueTemplate.vue';
import VueComponents from '../submenu/vue/vueview/VueComponents.vue';
import VueRouterView from '../submenu/vue/vueview/VueRouter.vue';
import VueAxios from '../submenu/vue/vueview/VueAxios.vue';

import ChartView from '../submenu/chart/ChartView.vue';

import Vuepractice from '../submenu/vue/practice.vue';


Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history', // url 헤쉬 값 제거
  
  routes: [
    {
      path: '/',
      redirect: '/vue',
    },
    {
      path: '/chart',
      component: ChartView,
    },
    {
      path: '/html',
      component: HtmlView,
    },
    {
      path: '/sass',
      component: SassView,
    },
    {
      path: '/git',
      component: GitView,
    },
    {
      path: '/jquery',
      component: JqueryView,
    },

    // vue
    {
      path: '/vue',
      component: VueView,
    },
    {
      path: '/vueinstance',
      component: VueInstance,
    },
    {
      path: '/vueTemplate',
      component: VueTemplate,
    },
    {
      path: '/vueComponents',
      component: VueComponents,
    },
    {
      path:'/vueRouter',
      component: VueRouterView,
    },
    {
      path:'/vueAxios',
      component: VueAxios,
    },
    {
      path:'/practice',
      component: Vuepractice,
    },

    {
      path: '/guide',
      component: GuideView,
    }
  ]
});