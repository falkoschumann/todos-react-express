import { useLocation } from 'react-router-dom';

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
  onSelectTodos,
  onToggleAll,
  onToggleTodo,
}) {
  function handleDestroy(todoId) {
    onDestroy({ todoId });
  }

  function handleToggleAll(event) {
    onToggleAll({ checked: event.target.checked });
  }

  function handleToggleTodo(todoId) {
    onToggleTodo({ todoId });
  }

  function handleAddTodo(title) {
    onAddTodo({ title });
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
                todo={todo}
                onDestroy={() => handleDestroy(todo.id)}
                onToggle={() => handleToggleTodo(todo.id)}
              />
            ))}
          </TodoList>
          <Footer
            activeCount={activeCount}
            completedCount={completedCount}
            filter={filter}
            onClearCompleted={onClearCompleted}
          />
        </>
      ) : null}
    </section>
  );
}

export default TodosController;
