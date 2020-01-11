<template>
  <div class="list">
    <div class="list-controls">
      <input v-model="todoThing" type="text" />
      <button @click="addTodoThing(todoThing)">ADD</button>
    </div>
    <ul>
      <!-- TODO read about keys in for Vue -->
      <li v-for="(item, index) in todoThings" :key="index">
        <div :id="index">
          <span>{{ item.name }}</span>
          <input
            v-model="localTodo"
            class="hide"
            @keyup.enter="completeEdit(localTodo, item, index)"
          />
          <!-- TODO change to icons -->
          <button @click="editTodoThing(item, index)">EDIT</button>
          <button @click="deleteTodoThing(item)">DELETE</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      todoThing: "",
      localTodo: ""
    };
  },
  computed: {
    ...mapState(["todoThings"])
  },
  methods: {
    ...mapMutations(["addTodoThing", "deleteTodoThing"]),
    /* eslint-disable */
    editTodoThing(item, index) {
      let elem = document.getElementById(index)
      /* Delete name */
      elem.removeChild(elem.childNodes[0])
      /* Dipslay input */
      elem.childNodes[0].classList.remove("hide")
    },
    completeEdit (localTodo, item, index) {
      item.name = localTodo
      let elem = document.getElementById(index)

      elem.removeChild(elem.childNodes[0])
      elem.prepend(`${item.name}`)
    }
   }
};
</script>

<style>
  li {
    list-style: none;
  }

  .hide {
    display: none;
  }
</style>
