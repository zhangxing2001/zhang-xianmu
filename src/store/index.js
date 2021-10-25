import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        zhangxing: [],
        lll: ""
    },
    mutations: {
        comitq(state, value) {
            state.zhangxing.unshift(...value)
        },
        jkajsn(state, thboo) {
            state.zhangxing.forEach(item => {
                item.boo = thboo
            })
        },
        indexdel(state, index) {
            state.zhangxing.splice(index, 1)
        },
        hjh(state, value) {
            state.zhangxing = state.zhangxing.filter(item => {
                return item.boo == value
            })
        }
    },
    actions: {

    },
    modules: {
    }
})
