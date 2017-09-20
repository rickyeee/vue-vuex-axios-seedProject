import fetch from 'utils/fetch'

export default {
  test(village){
    return fetch({
      url: '/household/list',
      method: 'get',
      params: {
        village
      }
    })
  }
}

