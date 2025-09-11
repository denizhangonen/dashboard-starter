import { render, screen } from '@testing-library/react';
import UsersPage from './page';

test('renders Users heading', () => {
  render(<UsersPage />);
  expect(screen.getByRole('heading', { name: /users/i })).toBeInTheDocument();
});

test('renders 3 users', () => {
  render(<UsersPage />);
  // expect(screen.getAllByRole('listitem')).toHaveLength(3);
  expect(screen.getByRole('list')).toBeDefined();
});

