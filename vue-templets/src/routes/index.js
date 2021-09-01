import Vue from 'vue';
import VueRouter from 'vue-router';
import HtmlView from '../submenu/html/HtmlView.vue';
import GuideView from '../submenu/html/GuideLine.vue';
import SassView from '../submenu/html/SassView.vue';
import GitView from '../submenu/git/GitView.vue';
import JqueryView from '../submenu/jquery/JqueryView.vue';
import VueView from '../submenu/vue/VueView.vue';
import ChartView from '../submenu/chart/ChartView.vue';


Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history', // url 헤쉬 값 제거
  
  routes: [
    {
      path: '/',
      redirect: '/chart',
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
    {
      path: '/vue',
      component: VueView,
    },
    {
      path: '/guide',
      component: GuideView,
    }
  ]
});