'use strict';

const todosRepository = require('../adapters/providers/todosRepository');

function toggleTodo({ todoId }) {
  function toggle() {
    todos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
  }

  let todos = todosRepository.load();
  toggle();
  todosRepository.store(todos);
  return { success: true };
}

module.exports = toggleTodo;
