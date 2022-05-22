'use strict';

let store = [];

const todosRepository = {
  load: () => {
    return store;
  },
  store: (todos) => {
    store = todos;
  },
};

module.exports = todosRepository;
