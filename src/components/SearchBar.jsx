
function SearchBar({
  searchTerm,
  onSearchChange,
  department,
  onDepartmentChange,
}) {
  return (
    <section className="filters">
      <input
        type="text"
        placeholder="Search by name, role, or email..."
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
        aria-label="Search users"
      />

      <select
        value={department}
        onChange={(event) => onDepartmentChange(event.target.value)}
        aria-label="Filter by department"
      >
        <option value="All">All Departments</option>
        <option value="Development">Development</option>
        <option value="Design">Design</option>
        <option value="Marketing">Marketing</option>
      </select>
    </section>
  );
}

export default SearchBar;
