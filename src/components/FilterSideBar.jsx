function FilterSidebar({ filters, setFilters, onApply, onReset, isOpen }) {
  return (
    <aside className={`filter-sidebar ${isOpen ? "" : "hidden"}`}>
      <h3 className="font-bold">Filter Employees</h3>

      <div className="filter-row">
        <label className="font-semibold">First Name</label>
        <input
          type="text"
          className="border-2 border-gray-400 rounded-sm py-1 my-2 ml-2"
          value={filters.firstName}
          onChange={(e) => setFilters({ ...filters, firstName: e.target.value })}
        />
      </div>

      <div className="filter-row">
        <label className="font-semibold">Department</label>
        <input
        className="border-2 border-gray-400 rounded-sm py-1 my-2 ml-2"
          type="text"
          value={filters.department}
          onChange={(e) =>
            setFilters({ ...filters, department: e.target.value })
          }
        />
      </div>

      <div className="filter-row">
        <label className="font-semibold">Role</label>
        <input
        className="border-2 border-gray-400 rounded-sm py-1 my-2 ml-2"
          type="text"
          value={filters.role}
          onChange={(e) => setFilters({ ...filters, role: e.target.value })}
        />
      </div>

      <button onClick={onApply} className="border-2 border-cyan-800 bg-cyan-700 text-white p-1 rounded-sm cursor-pointer hover:rounded-lg">Apply</button>
      <button onClick={onReset} className="border-2 border-cyan-800 bg-cyan-700 text-white hover:rounded-lg p-1 rounded-sm ml-4 cursor-pointer">Reset</button>
    </aside>
  );
}

export default FilterSidebar;
