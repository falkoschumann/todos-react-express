import { useCheckbox } from './hooks';

function TodoList({ activeCount, completedCount, children, onToggleAll }) {
  const toggleAllRef = useCheckbox({
    checked: activeCount === 0,
    indeterminate: activeCount > 0 && completedCount > 0,
  });

  function handleToggleAll(event) {
    onToggleAll({ checked: event.target.checked });
  }

  return (
    <main className="relative border-t border-solid border-gray-200">
      <input
        ref={toggleAllRef}
        id="toggle-all"
        type="checkbox"
        className="absolute -top-11 left-3 w-6 h-6"
        onChange={handleToggleAll}
      />
      <label htmlFor="toggle-all" className="sr-only">
        Mark all as complete
      </label>
      <ul>{children}</ul>
    </main>
  );
}

export default TodoList;
