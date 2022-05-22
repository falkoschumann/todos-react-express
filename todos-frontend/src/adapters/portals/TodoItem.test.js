import { render, screen } from '@testing-library/react';

import TodoItem from './TodoItem';

function handleToggle(cmd) {
  console.log('handle toggle', cmd);
}

describe('TodoItem', () => {
  it('renders active todo.', () => {
    render(
      <TodoItem todo={{ id: 2, title: 'Buy Unicorn', completed: false }} onToggle={handleToggle} />
    );

    const todoElement = screen.getByLabelText(/Buy Unicorn/i);
    expect(todoElement).not.toBeChecked();
  });

  it('renders completed todo.', () => {
    render(
      <TodoItem
        todo={{ id: 1, title: 'Taste JavaScript', completed: true }}
        onToggle={handleToggle}
      />
    );

    const checkboxElement = screen.getByLabelText(/Taste JavaScript/i);
    expect(checkboxElement).toBeChecked();
  });
});
