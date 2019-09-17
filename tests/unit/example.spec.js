import { expect } from 'chai'
import { createLocalVue, shallowMount, mount } from '@vue/test-utils'
import App from '@/App.vue'
import HelloWorld from '@/components/HelloWorld/HelloWorld.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

class LocalStorageMock {
  constructor () {
    this.store = {}
  }

  clear () {
    this.store = {}
  }

  getItem (key) {
    return this.store[key] || null
  }

  setItem (key, value) {
    this.store[key] = value.toString()
  }

  removeItem (key) {
    delete this.store[key]
  }
};

global.localStorage = new LocalStorageMock()

describe('App.vue', () => {
  let actions
  let store
  beforeEach(() => {
    actions = {
    }
    store = new Vuex.Store({
      state: {},
      actions
    })
  })
  it('loads app layout ', () => {
    const wrapper = shallowMount(App, {
      localVue,
      store
    })
    wrapper.find('#sortDsc').trigger('click')
    expect(wrapper.find('#snack').text()).include('Ascending')
  })
})

describe('HelloWorld.vue', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
    }
    store = new Vuex.Store({
      state: {},
      actions
    })
  })

  afterEach(() => {
    localStorage.clear()
    // remove callback
    localStorage.itemInsertionCallback = null
  })

  it('loads default data', () => {
    const wrapper = mount(HelloWorld, {
      localVue,
      store
    })

    expect(wrapper.vm.users).to.be.a('Array')
  })

  it('opens details when card clicked', () => {
    const wrapper = mount(HelloWorld, {
      localVue,
      store
    })

    expect(wrapper.vm.isFilterOn()).to.equal(true)
  })

  it('routes to new page when viewing details', () => {

  })

  it('closes dialog when button click', () => {

  })
})
