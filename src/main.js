// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import * as firebase from 'firebase'
import { store } from './store'
import AlertCmp from './components/Shared/Alert.vue'
import EditMeetupDialog from './components/InterestGroup/Edit/EditMeetupDetailsDialog'
import MemoryDialog from './components/InterestGroup/Edit/MemoryDialog'
import DateFilter from './filter/date'
import RegisterDialog from './components/InterestGroup/Registration/RegisterDialog'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)

Vue.component('app-alert', AlertCmp)
Vue.component('app-edit-meetup-dialog', EditMeetupDialog)
Vue.component('app-memory-dialog', MemoryDialog)
Vue.component('app-meetup-register-dialog', RegisterDialog)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDExdKqRyVDEyGfYL8ziceWV6HXw9WAB-I',
      authDomain: 'is5003ace-final.firebaseapp.com',
      databaseURL: 'https://is5003ace-final.firebaseio.com',
      projectId: 'is5003ace-final',
      storageBucket: 'is5003ace-final.appspot.com'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('fetchUserData')
      }
    })
    this.$store.dispatch('loadMeetups')
  }
})
