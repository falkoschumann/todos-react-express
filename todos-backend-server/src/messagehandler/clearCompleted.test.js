'use strict';

const todosRepository = require('../adapters/providers/todosRepository');
const clearCompleted = require('./clearCompleted');

jest.mock('../adapters/providers/todosRepository');

describe('Destroy todos', () => {
  beforeEach(() => {
    todosRepository.store([
      { id: 1, title: 'Taste JavaScript', completed: true },
      { id: 2, title: 'Buy Unicorn', completed: false },
    ]);
  });

  it('destroy a todo.', () => {
    const status = clearCompleted({ todoId: 1 });

    expect(status).toEqual({ success: true });
    const todos = todosRepository.load();
    expect(todos).toEqual([{ id: 2, title: 'Buy Unicorn', completed: false }]);
  });
});
