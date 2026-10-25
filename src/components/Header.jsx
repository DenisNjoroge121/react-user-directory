
function Header({ darkMode, onToggleTheme }) {
  return (
    <header className="header">
      <div>
        <h1>PeopleHub</h1>
        <p>Your team, all in one place.</p>
      </div>

      <button className="theme-button" onClick={onToggleTheme}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </header>
  );
}

export default Header;
