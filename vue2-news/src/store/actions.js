import { fetchUserInfo, fetchItemInfo, fetchList } from '../api/api.js'

export default {
  FETCH_LIST({commit}, pageName) {
    return fetchList(pageName)
    .then(({data}) => {
      commit('SET_LIST', data);
    })
    .catch(err => {
      console.log(err);
    })
  },
  FETCH_USER({commit}, userName) {
    return fetchUserInfo(userName)
    .then(({data}) => {
      commit('SET_USER', data);
    })
    .catch(err => {
      console.log(err);
    })
  },
  FETCH_ITEM({commit}, id) {
    return fetchItemInfo(id)
    .then(({data}) => {
      commit('SET_ITEM', data);
    })
    .catch(err => {
      alert(err);
    })
  }
}