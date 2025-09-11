import UserList from './UserList/UserList';

export const metadata = {
  title: 'Users',
};

const users = [
  { name: 'Jane Doe', email: 'jane@example.com' },
  { name: 'John Smith', email: 'john@example.com' },
  { name: 'Alice JohnsonAlice Johnson', email: 'alice@example.com' },
];

export default function UsersPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <UserList users={users} />
    </div>
  );
}

