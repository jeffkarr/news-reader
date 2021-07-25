import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin, ToastPlugin, ModalPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueAnimated from '@codekraft-studio/vue-animated'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueAnimated);
Vue.use(ToastPlugin);
Vue.use(ModalPlugin);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
