<template>
  <div class="todo">
    <h1>This is a everyday todo list page</h1>
    <TodoList />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";

export default {
  name: "todo",
  components: {
    TodoList
  }
};
</script>
