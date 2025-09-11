import { render, screen } from '@testing-library/react';
import UsersList from './UserList';

test('renders 3 users', () => {
  const users = [
    { name: 'Jane Doe', email: 'jane@example.com' },
    { name: 'John Smith', email: 'john@example.com' },
    { name: 'Alice JohnsonAlice Johnson', email: 'alice@example.com' },
  ];
  render(<UsersList users={users} />);
  expect(screen.getAllByRole('listitem')).toHaveLength(3);
});

