import * as types from './mutation-types'

const mutations = {
  [types.SET_ISLOADING](state, boolean) {
    state.isLoading = boolean
  },
  [types.SET_DIRECTION](state, string) {
    state.direction = string
  }
}

export default mutations