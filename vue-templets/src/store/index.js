import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList } from '../api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    html: []
  },
  actions: {
      fetch_news() {
        fetchNewsList()
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
      }
  }
});
