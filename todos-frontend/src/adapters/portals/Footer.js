import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { Filter, pluralize } from './utils';

function Footer({ activeCount, completedCount, filter, onClearCompleted }) {
  return (
    <footer className="p-3 grid grid-cols-3 items-center text-sm border-t border-solid border-gray-200 shadow-xl">
      <div data-testid="todo-count">
        <strong className="font-light">{activeCount}</strong> {pluralize(activeCount, 'item')} left
      </div>
      <nav>
        <ul className="flex justify-center">
          <NavItem to="/" active={filter !== Filter.Active && filter !== Filter.Completed}>
            All
          </NavItem>
          <NavItem to="/active" active={filter === Filter.Active}>
            Active
          </NavItem>
          <NavItem to="/completed" active={filter === Filter.Completed}>
            Completed
          </NavItem>
        </ul>
      </nav>
      {completedCount > 0 ? (
        <span className="text-right">
          <button className="font-light hover:underline" onClick={onClearCompleted}>
            Clear completed
          </button>
        </span>
      ) : null}
    </footer>
  );
}

export default Footer;

function NavItem({ to, active, children }) {
  return (
    <li>
      <Link
        to={to}
        aria-current={active ? 'page' : undefined}
        className={classNames({
          'm-1 px-2 py-1': true,
          'border border-solid border-transparent hover:border-red-300': !active,
          'border border-red-500': active,
        })}
      >
        {children}
      </Link>
    </li>
  );
}
