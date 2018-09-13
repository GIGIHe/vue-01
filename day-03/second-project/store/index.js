import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//create a store
const store = new Vuex.Store({
    state:{
        count:10,
        price:9.9,
        // total:''
    },
    mutations:{
        // mutation,对state修改
     'ADD'(state) {
          state.count++
     },
     'REDUCE'(state){
       state.count--
       console.log(state)
     },
     'CHANGE_COUNT'(state, payload) {
         state.count = payload
     }
    },
   
    // 获取total的另一种方法
    getters: {
        total(state) {
            return state.price * state.count
        }
    },
    // 使用action异步操作
    actions:{
      handleAsync($store,payload){
          setTimeout(() => {
              $store.commit('CHANGE_COUNT',payload)
          }, 1000);
      }  
    }
});
// 只有mutation能够修改state,
export default store