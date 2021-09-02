import { fetchNewsList } from '../api/index.js';

export default {
  FETCH_NEWS({ commit }){
    fetchNewsList()
      .then(({ data }) => {
        commit('SET_NEWS', data); // mutations 에 데이터 넘김
      })
      .catch(error => {
        console.log(error);
      })
  },
}