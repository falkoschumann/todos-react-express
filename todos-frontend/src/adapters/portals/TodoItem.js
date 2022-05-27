import classNames from 'classnames';

function TodoItem({ todo, onDestroy, onToggle }) {
  return (
    <li className="group relative text-2xl border-b border-solid border-gray-200 last:border-b-0">
      <input
        id={todo.id}
        type="checkbox"
        checked={todo.completed}
        onChange={onToggle}
        className="absolute top-0 bottom-0 left-3 w-6 h-6 my-auto"
      />
      <label
        htmlFor={todo.id}
        className={classNames({
          'block p-4 pl-16 font-normal break-all': true,
          'text-gray-400 line-through': todo.completed,
          'text-gray-600': !todo.completed,
        })}
      >
        {todo.title}
      </label>
      <button
        className="hidden group-hover:block absolute top-0 right-5 bottom-0 w-10 h-10 my-auto text-gray-400 hover:text-red-300"
        onClick={onDestroy}
      >
        x
      </button>
    </li>
  );
}

export default TodoItem;
