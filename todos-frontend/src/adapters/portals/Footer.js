import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { Filter, pluralize } from './utils';

function Footer({ activeCount, filter, onClearCompleted }) {
  return (
    <footer className="grid grid-cols-3 items-center text-sm text-gray-500 bg-white p-3">
      <span>
        {activeCount} {pluralize(activeCount, 'item')} left
      </span>
      <nav>
        <ul className="flex justify-center space-x-3">
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
      <span className="text-right">
        <button className="hover:underline" onClick={onClearCompleted}>
          Clear completed
        </button>
      </span>
    </footer>
  );
}

export default Footer;

function NavItem({ to, active, children }) {
  return (
    <li
      className={classNames({
        'px-2 py-1 bg-white': true,
        'border border-white hover:border hover:border-red-200': !active,
        'border border-red-400': active,
      })}
    >
      <Link to={to} aria-current={active ? 'page' : undefined}>
        {children}
      </Link>
    </li>
  );
}
