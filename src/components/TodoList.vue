<template>
  <div class="list">
    <div class="list-controls">
      <input v-model="todoThing" type="text" />
      <button @click="addTodoThing(todoThing)">ADD</button>
    </div>
    <ul>
      <!-- TODO read about keys in for Vue -->
      <li v-for="(item, index) in todoThings" :key="index">{{ item.name }}</li>
      {{
        todoThings
      }}
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      todoThing: ""
    };
  },
  computed: {
    ...mapState(["todoThings"])
  },
  methods: { ...mapMutations(["addTodoThing"]) }
};
</script>
