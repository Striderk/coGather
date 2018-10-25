import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
    ],
    user: {
      id: 'adlafakd',
      registeredMeetups: ['utown']
    },
    loading: false,
    error: null
  },
  mutations: {
    registerUserForMeetup (state, payload){
      const id = payload.id
      if (state.user.registeredMeetups.findIndex(meetup => meetup.id === id) >=0){
        return
      }
      state.user.registeredMeetups.push(id)
      state.user.fbKeys[id] = payload.fbKey
    },
    unregisterUserForMeetup (state, payload){
      const registeredMeetups = state.user.registeredMeetups
      registeredMeetups.splice(registeredMeetups.findIndex(meetup => meetup.id === payload), 1)
      Reflect.deleteProperty(state.user.fbKeys, payload)      
    },
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    },
    createMeetup (state, payload){
      state.loadedMeetups.push(payload)
    },
    setLoadedMeetups(state, payload)
    {
      state.loadedMeetups = payload
    },
    updateMeetup (state, payload) {
      const meetup = state.loadedMeetups.find(meetup => {
        return meetup.id === payload.id
      })
      if (payload.description) {
        meetup.description = payload.description
      }
      if (payload.date) {
        meetup.date = payload.date
      }
      if (payload.location) {
        meetup.location = payload.location
      }
    }
  },
  actions: {
    registerUserForMeetup ({commit, getters},payload){
      commit('setLoading', true)
      const user = getters.user
      firebase.database().ref('/user/'+ user.id).child('/registrations/').push(payload)
      .then(data =>{
        commit('setLoading', false)
        commit('registerUserForMeetup', {id:payload, fbKey: data.key})
        })
        .catch(error =>{
          console.log(error)
          commit('setLoading', false)
        })
    },
    unregisterUserFromMeetup ({commit},payload){
      commit('setLoading', true)
      const user = getters.user
      if (!user.fbKeys){
        return
      }
      const fbKey = user.fbKeys[payload]
      firebase.database().ref('/users/' + user.id +'/registrations/').child(fbKey)
      .remove()
      .then(() => {
        commit('setLoading', false)
        commit('unregisterUserForMeetup', payload)
      })
      .catch(error => {
        console.log(error)
        commit('setLoading', false)
      })
    },
    signUserUp ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.user.uid,
              registerMeetups: [],
              fbKeys: {}
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    signUserIn ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.user.uid,
              registerMeetups: [],
              fbKeys: {}
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    clearError ({commit}) {
      commit('clearError')
    },
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date.toISOString()
      }
      firebase.database().ref('meetups').push(meetup)
        .then((data) => {
          const key = data.key
          commit('createMeetup', {
            ...meetup,
            id: key
          })
        })
        .catch((error) => {
          console.log(error)
        })
      //Reach out to firebase and store it
    },
    loadMeetups ({commit}) {
      commit ('setLoading', true)
      firebase.database().ref('meetups').once('value')
        .then((data) => {
          const meetups = []
          const obj = data.val()
          for (let key in obj) {
            meetups.push({
              id: key,
              title: obj[key].title,
              location: obj[key].location,
              description: obj[key].description,
              imageUrl: obj[key].imageUrl,
              date: obj[key].date
            })
          }
          console.log(data)
          commit('setLoadedMeetups', meetups)
          commit ('setLoading', false)
          }
        )
        .catch (
          (error) => {
            console.log(error)
            commit ('setLoading', true)
          }
        )
    },
    updateMeetup({commit}, payload) {
      commit('setLoading', true)
      const updateObj = {}
      if (payload.description) {
        updateObj.description = payload.description
      }
      if (payload.date) {
        updateObj.date = payload.date
      }
      if (payload.location) {
        updateObj.location = payload.location
      }
      firebase.database().ref ('meetups').child(payload.id).update(updateObj)
        .then(() => {
          commit('setLoading', false)
          commit('updateMeetup', payload)
        })
        .catch((error) => {
          console.log(error)
          commit('setLoading', false)
        })
    }
  },
  getters: {
    loadedMeetups (state) {
       return state.loadedMeetups
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    },
    user (state) {
      return state.user
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    }
  }
})
