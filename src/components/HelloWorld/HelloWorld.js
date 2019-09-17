export default {
  name: 'HelloWorld',
  data: {
    snackbar: false
  },
  computed: getComputed(),
  methods: getMethods(),
  created: onCreated,
  mounted: onMounted
}

function getComputed () {
  return {
    dialog: {
      get: function () {
        return (this.user)
      }
    },
    users: {
      get: function () {
        const vm = this
        const sort = !vm.sortAsc ? vm.sortA : vm.sortD
        let users = vm.$store.state.users || []

        users = vm.isFilterOn()
          ? users.filter(vm.filterUsers)
          : users

        users.sort(sort)

        return users
      }
    },
    user: {
      get: function () {
        const vm = this
        return vm.users.filter(user => {
          return user._id === vm.$route.params.user
        })[0]
      }
    },
    nameFilter: {
      get: function () {
        return this.$store.state.nameFilter
      }
    },
    eyeColorFilter: {
      get: function () {
        return this.$store.state.eyeColorFilter
      }
    },
    sortAsc: {
      get: function () {
        return this.$store.state.sortAsc
      }
    }
  }
}

function getMethods () {
  return {
    isFilterOn,
    filterUsers,
    viewUser,
    saveUser,
    sortA,
    sortD,
    goHome
  }

  function sortA (a, b) {
    return (a.name > b.name) ? 1 : -1
  }

  function sortD (a, b) {
    return (a.name < b.name) ? 1 : -1
  }

  function isFilterOn () {
    switch (true) {
      case (this.nameFilter !== ''):
        return true
      case (this.eyeColorFilter !== ''):
        return true
    }
    return false
  }

  function filterUsers (user) {
    const vm = this
    const name = vm.nameFilter ? vm.nameFilter.toLowerCase() : ''
    const eyeColor = vm.eyeColorFilter ? vm.eyeColorFilter.toLowerCase() : ''

    const matchName = vm.nameFilter === '' ? true : ~user.name.toLowerCase().indexOf(name)
    const matchEyeColor = vm.eyeColorFilter === '' ? true : user.eyeColor.toLowerCase() === eyeColor

    if (name && eyeColor) {
      return matchName && matchEyeColor
    }

    if (name) { return matchName }

    if (eyeColor) { return matchEyeColor }
    return true
  }

  function viewUser (user) {
    this.$router.push('/' + user)
  }

  function saveUser () {
    const vm = this
    vm.$store.dispatch('SAVE_USER', vm.user).then(vm.goHome)
  }

  function goHome () {
    this.$router.push('/')
  }
}

function onCreated () {
  this.$store.dispatch('LOAD_USERS')
}

function onMounted () {
  if (localStorage) {
    if (localStorage.nameFilter) {
      this.$store.dispatch('SET_NAME_FILTER', localStorage.nameFilter)
    }

    if (localStorage.eyeColorFilter) {
      this.$store.dispatch('SET_EYE_COLOR_FILTER', localStorage.eyeColorFilter)
    }

    if (localStorage.sortAsc) {
      this.$store.dispatch('SET_SORT_ASC', localStorage.sortAsc)
    }
  }
}
