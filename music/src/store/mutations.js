import * as types from './mutation-types'

// 同步修改状态
const mutations = {
    [types.SET_SINGER] (state, singer) {
        state.singer = singer
    }
}

export default mutations
