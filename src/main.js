import Vue from 'vue'
import App from './myApp.vue'
import Router from "vue-router"
import message from './components/message'
import demo from './components/demo'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Router)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})
const route = [
  { path: "/demo", component: demo },
  { path: "/message", component: message }
];
const router = new Router({ routes: route });
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')