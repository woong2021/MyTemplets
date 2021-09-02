import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

//플러그 형태로 제공
Vue.use(Vuex);

//  Vuex : 상태관리 도구
export const store = new Vuex.Store({
  // state,
  // getters,
  // mutations : state에 데이터 넘김,
  // actions : API 호출,

  state: {
    news: [],
  },
  
  getters: {
    fetchedNews(state){
      return state.news;
    },
  },
  mutations,
  actions,
    
});