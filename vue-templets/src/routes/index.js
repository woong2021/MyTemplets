import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../submenu/NewsView.vue';
import AskView from '../submenu/AskView.vue';
import JobsView from '../submenu/JobsView.vue';
import UserView from '../submenu/UserView.vue';
import ItemView from '../submenu/ItemView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history', // url 헤쉬 값 제거
    routes: [
        {
            path: '/', //url에 대한 정보
            redirect: '/news',
        },
        {
            path: '/news',
            component: NewsView, // 특정 url 주소로 갔을 때 표시될 컴포넌트
        },
        {
            path: '/ask',
            component: AskView,
        },
        {
            path: '/jobs',
            component: JobsView,
        },
        {
            path: '/user',
            component: UserView,
        },
        {
            path: '/item',
            component: ItemView,
        }

    ]
});