// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import * as echarts from 'echarts'
import i18n from './i18n'
// import axios from 'axios'

// import { numFormat } from './utils/format'
import Vue from 'vue'
import App from './App.vue'
// import VueI18n from 'vue-i18n'
// import i18n from './lang'
// Vue.prototype.format = v => numFormat(v)
Vue.prototype.$echarts = echarts
// import Avue from '@smallwei/avue'
// import '@smallwei/avue/lib/index.css'
// Vue.use(ElementUI)
Vue.use(window.AVUE)
// Vue.use(VueI18n)

Vue.config.productionTip = false
// Vue.prototype.$http=axios
new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
