<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header />
      <TodoMain />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    TodoMain: Main,
    Footer
  },
  mounted () {
    // 发送命令给action：异步获取保存todos数据并显示
    this.$store.dispatch('reqTodos')
  }
}
</script>

<style>
  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
