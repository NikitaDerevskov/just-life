import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoThings: []
  },
  mutations: {
    addTodoThing(state, thing) {
      /**
       * Add thing to state and to local storage both
       * because it is more reactive and maybe
       * in fututre i will delete localStorage
       * localStorage here just for test
       * READ THIS:
       * https://www.rdegges.com/2018/please-stop-using-local-storage/
       */

      this.state.todoThings.push({ name: thing });
      localStorage.setItem(thing, thing);
    }
  },
  actions: {},
  modules: {}
});
