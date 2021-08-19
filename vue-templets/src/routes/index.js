import Vue from 'vue';
import VueRouter from 'vue-router';
import HtmlView from '../submenu/HtmlView.vue';
import SassView from '../submenu/SassView.vue';
import GitView from '../submenu/GitView.vue';
import JqueryView from '../submenu/JqueryView.vue';
import VueView from '../submenu/VueView.vue';
import ChartView from '../submenu/ChartView.vue';

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
        }

    ]
});