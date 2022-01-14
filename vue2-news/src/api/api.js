import axios from 'axios';

// 1.HTTP Request.Response 관련 기본설정 = 공통 url 정리
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/',
}

// 2.API 함수들 정리
function fetchList(pageName) {
  return axios.get(`${config.baseUrl}${pageName}/1.json`);
}
function fetchUserInfo(username) {
  return axios.get(`${config.baseUrl}user/${username}.json`);
}
function fetchItemInfo(id) {
  return axios.get(`${config.baseUrl}item/${id}.json`);
}

export {
  fetchList,
  fetchUserInfo,
  fetchItemInfo,
}