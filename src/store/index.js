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
      /* eslint-disable */
      // console.log(this.state.todoThings)
      // localStorage.setItem(thing, thing);
    },
    deleteTodoThing(state, thing) {
		let things = this.state.todoThings.filter(({name}) => name !== thing.name)
		Vue.set(state, 'todoThings', things)
    }
  },
  actions: {},
  modules: {}
});
