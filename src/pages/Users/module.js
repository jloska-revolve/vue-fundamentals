import usersService from './service';

const state = {
  userList: [],
}

const getters = {
  userList: (state) => state.userList,
};

const actions = {
  async getUserList({ commit }) {
    const result = await usersService.getUsers();
    commit('setUserList', result);
  },
};

const mutations = {
  setUserList(state, result) {
    state.userList = result;
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
