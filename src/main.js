import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const axios = require('axios').default;

Vue.config.productionTip = false

const messages = {
  en: {
    message: {
      hello: 'Hello, welcome to test app!'
    }
  },
  sk: {
    message: {
      hello: 'Ahoj, vitaj v testovacej aplikácií!'
    }
  }
};

const i18n = new VueI18n({
  locale: 'sk',
  messages
});

new Vue({
  vuetify,
  router,
  axios,
  i18n,
  render: h => h(App)
}).$mount('#app')
