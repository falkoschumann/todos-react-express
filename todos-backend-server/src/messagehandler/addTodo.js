'use strict';

const todosRepository = require('../adapters/providers/todosRepository');

function addTodo({ title }) {
  function addTodoToList() {
    let id = todos.map((todo) => todo.id).reduce((id1, id2) => Math.max(id1, id2), 0);
    id++;
    todos.push({ id, title, completed: false });
  }

  if (!title) {
    return { success: true };
  }

  let todos = todosRepository.load();
  addTodoToList();
  todosRepository.store(todos);

  return { success: true };
}

module.exports = addTodo;
