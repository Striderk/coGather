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


Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)

Vue.component('app-alert', AlertCmp)
Vue.component('app-edit-meetup-dialog', EditMeetupDialog)
Vue.component('app-memory-dialog', MemoryDialog)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyB94Sf8omterbmhpaUu63LvftiqhVG7SSo',
      authDomain: 'interestgroup-5005ace.firebaseapp.com',
      databaseURL: 'https://interestgroup-5005ace.firebaseio.com/',
      projectId: 'interestgroup-5005ace',
      storageBucket: 'interestgroup-5005ace.appspot.com'
    })
    this.$store.dispatch('loadMeetups')
  }
})
