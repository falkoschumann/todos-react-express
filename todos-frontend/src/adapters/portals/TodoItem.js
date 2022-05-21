// @ts-check

function TodoItem({ todo }) {
  return (
    <li className="px-3 py-4 font-light text-2xl text-gray-600 bg-white border-b border-gray-300">
      <input type="checkbox" checked={todo.completed} readOnly className="w-6 h-6 mr-6" />
      {todo.title}
    </li>
  );
}

export default TodoItem;
