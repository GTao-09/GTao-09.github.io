/*
包含n个用于间接更新状态的方法的对象模块
 */
import {ADD_TODO, DELETE_TODO, SELECT_ALL_TODOS, DELETE_COMPLETE_TODOS, RECEIVE_TODOS} from './mutation-types'

import storageUtil from '../utils/storageUtils'

export default {

  // 添加todo
  addTodo ({commit}, todo) {
    // 提交一个comutation请求
    commit(ADD_TODO, {todo}) // 传递给mutation的是一个包含数据的对象
  },
  // 删除todo
  deleteTodo ({commit}, index) {
    commit(DELETE_TODO, {index})
  },
  // 选择所有
  selectAll ({commit}, isCheck) {
    commit(SELECT_ALL_TODOS, {isCheck})
  },
  // 删除已选择的
  deleteCompleteTodos ({commit}) {
    commit(DELETE_COMPLETE_TODOS)
  },

  // 异步获取todos并更新状态
  reqTodos ({commit}) {
    // 模拟
    setTimeout(() => {
      // 读取数据
      let todos = storageUtil.readTodos()
      // 提交mutation
      commit(RECEIVE_TODOS, todos)
    }, 1000)
  }
}
