// @ts-check

import TodoItem from './TodoItem';

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((t) => (
        <TodoItem key={t.id} todo={t} />
      ))}
    </ul>
  );
}

export default TodoList;
