<template>
  <ul class="todo-main">
    <MainItem v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index"/>
  </ul>
</template>

<script>
import {mapState} from 'vuex'
import MainItem from './MainItem.vue'
import storageUtils from '../utils/storageUtils'

export default {

  computed: {
    ...mapState(['todos'])
  },

  watch: { // 因为这里有todos所以在这监视todos
    todos: {
      deep: true, // 深度监视
      handler: storageUtils.saveTodos
    }
  },

  components: {
    MainItem
  }
}
</script>

<style scoped>
  /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
