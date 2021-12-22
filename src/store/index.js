import { createStore } from 'vuex'

export default createStore({
  state: {
    addProductModal: false,
    thisProductModal: false,
  },
  mutations: {
    setAddProductModal(state, payload) {
      state.addProductModal = payload;
    },
    setThisProductModal(state, payload) {
      state.thisProductModal = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
