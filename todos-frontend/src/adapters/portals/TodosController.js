import { useLocation } from 'react-router-dom';
import { useState } from 'react';

import { Filter } from './utils';
import Footer from './Footer';
import Header from './Header';
import TodoItem from './TodoItem';
import TodoList from './TodoList';
import { useOnLoad } from './hooks';

function TodosController({
  selectedTodos,
  onAddTodo,
  onClearCompleted,
  onDestroy,
  onSaveTodo,
  onSelectTodos,
  onToggleAll,
  onToggleTodo,
}) {
  const [editing, setEditing] = useState();

  function handleAddTodo(title) {
    onAddTodo({ title });
  }

  function handleToggleTodo(id) {
    onToggleTodo({ id });
  }

  function handleToggleAll(event) {
    onToggleAll({ checked: event.target.checked });
  }

  function handleDestroy(id) {
    onDestroy({ id });
  }

  function handleEdit(todoId) {
    setEditing(todoId);
  }

  function handleSaveTodo(id, title) {
    onSaveTodo({ id, title });
    setEditing(null);
  }

  function handleCancel() {
    setEditing(null);
  }

  function handleClearCompleted() {
    onClearCompleted();
  }

  function useProjection() {
    let activeCount, completedCount, filter, shownTodos;
    const { pathname } = useLocation();
    switch (pathname) {
      case '/active':
        filter = Filter.Active;
        shownTodos = selectedTodos?.todos.filter((t) => !t.completed);
        break;
      case '/completed':
        filter = Filter.Completed;
        shownTodos = selectedTodos?.todos.filter((t) => t.completed);
        break;
      default:
        filter = Filter.All;
        shownTodos = selectedTodos?.todos;
        break;
    }
    activeCount = selectedTodos?.todos.filter((t) => !t.completed).length;
    completedCount = selectedTodos?.todos.length - activeCount;

    return { activeCount, completedCount, filter, shownTodos };
  }

  useOnLoad(onSelectTodos);
  const { activeCount, completedCount, filter, shownTodos } = useProjection();

  return (
    <section className="relative container mx-auto mt-36 mb-10 bg-white shadow-2xl">
      <Header onAddTodo={handleAddTodo} />
      {selectedTodos?.todos.length ? (
        <>
          <TodoList
            activeCount={activeCount}
            completedCount={completedCount}
            shownTodos={shownTodos}
            onToggleAll={handleToggleAll}
          >
            {shownTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                editing={editing === todo.id}
                todo={todo}
                onCancel={handleCancel}
                onDestroy={() => handleDestroy(todo.id)}
                onEdit={() => handleEdit(todo.id)}
                onSave={(title) => handleSaveTodo(todo.id, title)}
                onToggle={() => handleToggleTodo(todo.id)}
              />
            ))}
          </TodoList>
          <Footer
            activeCount={activeCount}
            completedCount={completedCount}
            filter={filter}
            onClearCompleted={handleClearCompleted}
          />
        </>
      ) : null}
    </section>
  );
}

export default TodosController;
