'use strict';

const todosRepository = require('../adapters/providers/todosRepository');

function destroyTodo({ todoId }) {
  function removeTodoFromList() {
    todos = todos.filter((todo) => todo.id !== todoId);
  }

  let todos = todosRepository.load();
  removeTodoFromList();
  todosRepository.store(todos);
  return { success: true };
}

module.exports = destroyTodo;
