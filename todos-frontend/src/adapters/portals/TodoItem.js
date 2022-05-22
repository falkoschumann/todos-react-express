function TodoItem({ todo }) {
  return (
    <li className="px-3 py-4 font-light text-2xl bg-white border-b border-gray-300">
      <input
        id={todo.id}
        type="checkbox"
        checked={todo.completed}
        readOnly
        className="w-6 h-6 mr-6"
      />
      <label htmlFor={todo.id}>{todo.title}</label>
    </li>
  );
}

export default TodoItem;
