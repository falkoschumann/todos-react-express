import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { Filter } from './utils';
import Footer from './Footer';

describe('Footer', () => {
  it('renders 1 todo with singular counter.', () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <Footer activeCount={1} filter={Filter.All} />
      </Router>
    );

    const countElement = screen.getByText(/1 item left/i);
    expect(countElement).toBeInTheDocument();
  });

  it('renders multiple todos with plural counter.', () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <Footer activeCount={2} filter={Filter.All} />
      </Router>
    );

    const countElement = screen.getByText(/2 items left/i);
    expect(countElement).toBeInTheDocument();
  });

  it('renders all as current page.', () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <Footer activeCount={1} filter={Filter.All} />
      </Router>
    );

    const linkElement = screen.getByRole('link', { current: 'page' });
    expect(linkElement.text).toEqual('All');
  });

  it('renders active as current page .', () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <Footer activeCount={1} filter={Filter.Active} />
      </Router>
    );

    const linkElement = screen.getByRole('link', { current: 'page' });
    expect(linkElement.text).toEqual('Active');
  });
  it('renders completed as current page.', () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <Footer activeCount={1} filter={Filter.Completed} />
      </Router>
    );

    const linkElement = screen.getByRole('link', { current: 'page' });
    expect(linkElement.text).toEqual('Completed');
  });
});
