import axios from 'axios';

//외부 API
const config = {
  baseUrl : 'https://api.hnpwa.com/v0/'
};

function fetchNewsList() {
  return axios.get(`${config.baseUrl}news/1.json`);
}

export {
  fetchNewsList
}