import Vue from 'vue';
import Vuex from 'vuex';
import users from './pages/Users/module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users,
  },
});
