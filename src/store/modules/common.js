const common = {
  state: {
    msg: '我是原始数据'
  },
  mutations: {
    mutationsMsg (state, payload) {
      state.msg = payload.msg
    }
  },

  actions: {
    // 获取所有枚举值
    changeMsg ({ commit }) {
      let data = {msg: '我是修改后的数据~~~'}
      commit('mutationsMsg', data)
    }
  }
}
export default common
