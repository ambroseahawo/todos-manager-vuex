<template>
  <div>
    <div class="container">
      <h3>Todos</h3>
      <div v-for="todo in allTodos" :key="todo.id" class="todos">
        {{ todo.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TodosList',
  computed: mapGetters(['allTodos'])
}
</script>
<style>

</style>
