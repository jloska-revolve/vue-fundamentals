import Vue from 'vue';
import Vuex from 'vuex';
import home from './pages/Home/module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
  },
});
