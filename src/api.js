import api from './plugins/axios.js'

export default (props) => {
  return {
    getUsers
  }
  function getUsers () {
    return api.get('./users.json')
  }
}
