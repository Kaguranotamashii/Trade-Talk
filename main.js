import App from './App'
//uview

import Vue from 'vue'
import uView from '@/uview-ui'
Vue.use(uView)



Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
