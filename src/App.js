import HelloWorld from './components/HelloWorld/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: () => ({
    eyeColors: [
      {
        text: 'Green',
        value: 'green'
      },
      {
        text: 'Blue',
        value: 'blue'
      },
      {
        text: 'Brown',
        value: 'brown'
      }
    ]
  }),
  computed: getComputed()
  // methods: getMethods(),
  // watch: getWatched()
}

function getComputed () {
  return {
    sortAsc: {
      get: function () {
        return this.$store.state.sortAsc
      },
      set: function (sortAsc) {
        this.$store.dispatch('SET_SORT_ASC', sortAsc)
      }
    },
    eyeColorFilter: {
      get: function () {
        return this.$store.state.eyeColorFilter
      },
      set: function (eyeColor) {
        console.log(eyeColor)
        this.$store.dispatch('SET_EYE_COLOR_FILTER', eyeColor)
      }
    },
    nameFilter: {
      get: function () {
        return this.$store.state.nameFilter
      },
      set: function (needle) {
        this.$store.dispatch('SET_NAME_FILTER', needle)
      }
    }
  }
}

// function getMethods () {
//   return {
//     filterUsers
//   }
//   function filterUsers () {
//     this.$store.dispatch('FILTER_USERS')
//   }
// }
//
// function getWatched () {
//   return {
//     eyeColorFilter: function (eyeColor) {
//       // this.filterUsers(eyeColor)
//     },
//     nameFilter: function (eyeColor) {
//       // this.filterUsers(eyeColor)
//     }
//   }
// }
