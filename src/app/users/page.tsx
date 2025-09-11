export const metadata = {
  title: 'Users',
};

export default function UsersPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <ul className="space-y-2">
        <li>Jane Doe – jane@example.com</li>
        <li>John Smith – john@example.com</li>
        <li>Alice Johnson – alice@example.com</li>
      </ul>
    </div>
  );
}

