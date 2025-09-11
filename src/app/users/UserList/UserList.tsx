type User = {
  name: string;
  email: string;
};

type UserListProps = {
  users: User[];
};

export default function UsersList({ users }: UserListProps) {
  return (
    <ul>
      {users.map((u, index: number) => (
        <li key={index}>
          {u.name} - {u.email}
        </li>
      ))}
    </ul>
  );
}

