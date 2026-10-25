
function UserCard({ user }) {
  return (
    <article className="user-card">
      <div className="avatar">{user.initials}</div>

      <h2>{user.name}</h2>
      <p className="role">{user.role}</p>
      <p className="email">{user.email}</p>

      <span className="department">{user.department}</span>
    </article>
  );
}

export default UserCard;
