import exampleService from './service';

const getDefaultState = () => ({
  example: {},
});

const state = getDefaultState();

const getters = {
  example: (state) => state.example,
};

const actions = {
  async getExample({ commit }) {
    const result = await exampleService.exampleFunction();
    commit('setExample', result);
  },
};


const mutations = {
  setExample(state, result) {
    state.example = result;
  },
};

const module = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export default module;
