'use strict';

const todosRepository = require('../adapters/providers/todosRepository');
const toggleAll = require('./toggleAll');

jest.mock('../adapters/providers/todosRepository');

describe('Toggle all', () => {
  beforeEach(() => {
    todosRepository.store([
      { id: 1, title: 'Taste JavaScript', completed: true },
      { id: 2, title: 'Buy Unicorn', completed: false },
    ]);
  });

  it('set all todos completed.', () => {
    const status = toggleAll({ checked: true });

    expect(status).toEqual({ success: true });
    const todos = todosRepository.load();
    expect(todos).toEqual([
      { id: 1, title: 'Taste JavaScript', completed: true },
      { id: 2, title: 'Buy Unicorn', completed: true },
    ]);
  });

  it('set all todos active.', () => {
    const status = toggleAll({ checked: false });

    expect(status).toEqual({ success: true });
    const todos = todosRepository.load();
    expect(todos).toEqual([
      { id: 1, title: 'Taste JavaScript', completed: false },
      { id: 2, title: 'Buy Unicorn', completed: false },
    ]);
  });
});
