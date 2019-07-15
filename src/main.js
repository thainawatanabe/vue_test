import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import InstantSearch from 'vue-instantsearch';
import VueCharts from 'vue-chartjs'
import { Bar, Line } from 'vue-chartjs'

import App from './App.vue'

Vue.use(InstantSearch);

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

