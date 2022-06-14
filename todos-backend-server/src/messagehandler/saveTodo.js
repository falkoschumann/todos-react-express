'use strict';

const todosRepository = require('../adapters/providers/todosRepository');

function saveTodo({ id, newTitle }) {
  let todos = todosRepository.load();
  todos = doSaveTodo(todos, id, newTitle);
  todosRepository.store(todos);
  return { success: true };
}

function doSaveTodo(todos, id, title) {
  if (title) {
    return todos.map((todo) => (todo.id === id ? { ...todo, title } : todo));
  } else {
    return todos.filter((todo) => todo.id !== id);
  }
}

module.exports = saveTodo;
