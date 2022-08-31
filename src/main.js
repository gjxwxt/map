import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import * as echarts from 'echarts'
// import axios from 'axios'

import Vue from 'vue'
import App from './App.vue'
// import Avue from '@smallwei/avue'
// import '@smallwei/avue/lib/index.css'
Vue.use(ElementUI)
Vue.use(window.AVUE)
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
// Vue.prototype.$http=axios
new Vue({
  render: h => h(App),
}).$mount('#app')
