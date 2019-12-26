import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import { setupEvenBus } from './plugins/EvenBus'
import * as fileSistem from './modules/fileSistem'
import VueImgOrientationChanger from 'vue-img-orientation-changer'

Vue.use(VueImgOrientationChanger)

Vue.config.productionTip = false
setupEvenBus();

new Vue({
  router,
  store,
  vuetify,
  fileSistem,
  render: h => h(App)
}).$mount('#app')
