import Vue from 'vue'
import Vuex from 'vuex'
import Api from './api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      {
        '_id': '5d7d9bc823097ac87a9246a5',
        'index': 0,
        'guid': '489183e7-8a24-4833-badb-2a61e27bb679',
        'isActive': true,
        'balance': '$1,817.22',
        'picture': 'http://placehold.it/32x32',
        'age': 24,
        'eyeColor': 'blue',
        'name': 'Noble Roman',
        'gender': 'male',
        'company': 'OHMNET',
        'email': 'nobleroman@ohmnet.com',
        'phone': '+1 (941) 479-2884',
        'address': '429 Evergreen Avenue, Emison, Montana, 3168',
        'about': 'Occaecat consectetur Lorem elit sunt ea reprehenderit. Sunt cupidatat excepteur deserunt ex deserunt culpa tempor sint deserunt esse esse proident esse. Dolor nostrud Lorem laboris ipsum est culpa velit. Consectetur cillum laborum ad ipsum cupidatat pariatur in tempor nostrud duis proident sit veniam irure. Lorem deserunt dolor reprehenderit est laborum ipsum commodo ad enim quis culpa minim consectetur Lorem.\r\n',
        'registered': '2017-12-14T06:35:11 +07:00',
        'latitude': -16.583617,
        'longitude': 30.754479,
        'tags': [
          'magna',
          'amet',
          'eiusmod',
          'id',
          'ipsum',
          'enim',
          'deserunt'
        ],
        'friends': [
          {
            'id': 0,
            'name': 'Bernard Collier'
          },
          {
            'id': 1,
            'name': 'Charles Francis'
          },
          {
            'id': 2,
            'name': 'Jolene Meyers'
          }
        ],
        'greeting': 'Hello, Noble Roman! You have 2 unread messages.',
        'favoriteFruit': 'banana'
      }
    ],
    filteredUsers: [],
    eyeColorFilter: '',
    nameFilter: '',
    sortAsc: 0
  },
  mutations: {
    EYE_COLOR_FILTER_SET: eyeColorFilterSet,
    NAME_FILTER_SET: nameFilterSet,
    SORT_ASC_SET: sortAscSet,
    USERS_LOADED: usersLoaded,
    USERS_FILTERED: usersFiltered,
    USER_SAVED: userSaved
  },
  actions: {
    SET_SORT_ASC: setSortAsc,
    SET_NAME_FILTER: setNameFilter,
    SET_EYE_COLOR_FILTER: setEyeColorFilter,
    LOAD_USERS: loadUsers,
    SAVE_USER: saveUser
  }
})

function setSortAsc ({ commit }, sortAsc) {
  sortAsc = sortAsc || ''
  commit('SORT_ASC_SET', sortAsc)
}

function sortAscSet (state, sortAsc) {
  localStorage.sortAsc = sortAsc
  state.sortAsc = sortAsc
}

function usersFiltered (state, users) {
  state.filteredUsers = users
}

function usersLoaded (state, users) {
  state.users = users
}

function loadUsers ({ commit }) {
  Api().getUsers().then(commitResponse)

  function commitResponse (response) {
    commit('USERS_LOADED', response.data)
  }
}

function userSaved (state, user) {
  // Api().saveUser(user)
}

function saveUser ({ commit }, user) {
  commit('USER_SAVED', user)
}

function setEyeColorFilter ({ commit, dispatch }, eyeColor) {
  eyeColor = eyeColor || ''
  commit('EYE_COLOR_FILTER_SET', eyeColor)
}

function setNameFilter ({ commit, dispatch }, needle) {
  needle = needle || ''
  commit('NAME_FILTER_SET', needle)
}

function nameFilterSet (state, needle) {
  localStorage.nameFilter = needle
  state.nameFilter = needle
}

function eyeColorFilterSet (state, eyeColor) {
  localStorage.eyeColorFilter = eyeColor
  state.eyeColorFilter = eyeColor
}
