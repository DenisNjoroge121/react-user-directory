
import UserCard from "./UserCard";

function UserDirectory({ users }) {
  if (users.length === 0) {
    return (
      <p className="empty-message">
        No users found. Try another search.
      </p>
    );
  }

  return (
    <section className="user-grid">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </section>
  );
}

export default UserDirectory;
