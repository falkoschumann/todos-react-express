'use strict';

const todosRepository = require('../adapters/providers/todosRepository');
const selectTodos = require('./selectTodos');

jest.mock('../adapters/providers/todosRepository');

describe('Select todos', () => {
  it('returns all todos.', () => {
    todosRepository.store([
      { id: 1, title: 'Taste JavaScript', completed: true },
      { id: 2, title: 'Buy Unicorn', completed: false },
    ]);

    const result = selectTodos();

    expect(result).toEqual({
      todos: [
        { id: 1, title: 'Taste JavaScript', completed: true },
        { id: 2, title: 'Buy Unicorn', completed: false },
      ],
    });
  });
});
