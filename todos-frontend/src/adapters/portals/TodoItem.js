function TodoItem({ todo, onDestroy, onToggle }) {
  return (
    <li className="group relative px-3 py-4 font-light text-2xl bg-white border-b border-gray-300">
      <input
        id={todo.id}
        type="checkbox"
        checked={todo.completed}
        onChange={onToggle}
        className="w-6 h-6 mr-6"
      />
      <label htmlFor={todo.id}>{todo.title}</label>
      <button
        className="absolute top-0 right-5 bottom-0 w-10 h-10 mx-0 my-auto text-red-300 hidden ease-out group-hover:block"
        onClick={onDestroy}
      >
        X
      </button>
    </li>
  );
}

export default TodoItem;
