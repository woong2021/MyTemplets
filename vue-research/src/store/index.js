import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

//플러그 형태로 제공
Vue.use(Vuex);

export const store = new Vuex.Store({
  // state,
  // getters,
  // mutations : state에 데이터 넘김,
  // actions : API 호출,

  state: {
    news: [],
    jobs: [],
    ask: [],
    user: {},
  },
  
  getters: {
    fetchedNews(state){
      return state.news;
    },

    fetchedAsk(state){
      return state.ask;
    },

    fetchedJobs(state){
      return state.jobs;
    }
  },
  mutations,
  actions,
    
});