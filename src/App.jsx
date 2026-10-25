
import { useState } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import UserDirectory from "./components/UserDirectory";

import "./App.css";

// Sample user data
const users = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Frontend Developer",
    email: "alice@example.com",
    department: "Development",
    initials: "AJ",
  },
  {
    id: 2,
    name: "Brian Otieno",
    role: "UI/UX Designer",
    email: "brian@example.com",
    department: "Design",
    initials: "BO",
  },
  {
    id: 3,
    name: "Carol Wanjiku",
    role: "Backend Developer",
    email: "carol@example.com",
    department: "Development",
    initials: "CW",
  },
  {
    id: 4,
    name: "David Mwangi",
    role: "Marketing Specialist",
    email: "david@example.com",
    department: "Marketing",
    initials: "DM",
  },
  {
    id: 5,
    name: "Esther Akinyi",
    role: "Graphic Designer",
    email: "esther@example.com",
    department: "Design",
    initials: "EA",
  },
  {
    id: 6,
    name: "Felix Kamau",
    role: "Digital Marketer",
    email: "felix@example.com",
    department: "Marketing",
    initials: "FK",
  },
];

function App() {
  // State variables
  const [searchTerm, setSearchTerm] = useState("");
  const [department, setDepartment] = useState("All");
  const [darkMode, setDarkMode] = useState(false);

  // Filter users by search term and department
  const filteredUsers = users.filter((user) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      user.name.toLowerCase().includes(search) ||
      user.role.toLowerCase().includes(search) ||
      user.email.toLowerCase().includes(search);

    const matchesDepartment =
      department === "All" ||
      user.department === department;

    return matchesSearch && matchesDepartment;
  });

  return (
    <main className={darkMode ? "app dark" : "app"}>
      <div className="container">
        {/* Application header */}
        <Header
          darkMode={darkMode}
          onToggleTheme={() => setDarkMode(!darkMode)}
        />

        {/* Introduction */}
        <section className="intro">
          <h2>Team Directory</h2>
          <p>Discover the people behind the work.</p>

          <p className="user-count">
            Showing {filteredUsers.length} of {users.length} team members
          </p>
        </section>

        {/* Search and department filter */}
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          department={department}
          onDepartmentChange={setDepartment}
        />

        {/* Display filtered user cards */}
        <UserDirectory users={filteredUsers} />

        {/* Footer */}
        <footer>
          <p>PeopleHub · Built with React and Vite</p>
        </footer>
      </div>
    </main>
  );
}

export default App;
