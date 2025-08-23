import { useState, useMemo } from "react";
import Header from "./Header";
import FilterSidebar from "./FilterSideBar";
import { Link } from "react-router-dom";

function EmployeeGrid({ employees ,setEmployees}) {
  // Search / Sort / Page Size
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState("");
  const [pageSize, setPageSize] = useState(10);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);

  // Filters
  const [filters, setFilters] = useState({
    firstName: "",
    department: "",
    role: "",
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

    const onDelete = (id) => {
    // remove from state
    const updated = employees.filter((emp) => emp.id !== id);
    setEmployees(updated);

    // also update localStorage (if you are persisting employees there)
    localStorage.setItem("employees", JSON.stringify(updated));

    // force refresh
    window.location.reload();
  };

  // Filtering + Searching + Sorting
  const filteredEmployees = useMemo(() => {
    let list = [...employees];

    // Apply filters
    if (filters.firstName) {
      list = list.filter((e) =>
        e.firstName.toLowerCase().includes(filters.firstName.toLowerCase())
      );
    }
    if (filters.department) {
      list = list.filter((e) =>
        e.department.toLowerCase().includes(filters.department.toLowerCase())
      );
    }
    if (filters.role) {
      list = list.filter((e) =>
        e.role.toLowerCase().includes(filters.role.toLowerCase())
      );
    }

    // Apply search
    if (searchTerm) {
      list = list.filter(
        (e) =>
          e.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          e.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          e.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply sort
    if (sortKey) {
      list.sort((a, b) =>
        a[sortKey].localeCompare(b[sortKey], "en", { sensitivity: "base" })
      );
    }

    return list;
  }, [employees, searchTerm, sortKey, filters]);

  
  const totalPages = Math.ceil(filteredEmployees.length / pageSize);
  const paginatedEmployees = filteredEmployees.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="employee-grid">
      {/* Toolbar Header */}
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortKey={sortKey}
        setSortKey={setSortKey}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />

      {/* Filter Toggle */}
      <button id="filter-button" onClick={() => setIsFilterOpen(!isFilterOpen)} className="text-cyan-900 p-3 my-3 rounded-xl bg-gray-400 cursor-pointer hover:rounded-2xl">
        {isFilterOpen ? "Close Filter" : "Open Filter"}
      </button>

      {/* Sidebar */}
      <FilterSidebar
        filters={filters}
        setFilters={setFilters}
        onApply={() => setIsFilterOpen(false)}
        onReset={() => setFilters({ firstName: "", department: "", role: "" })}
        isOpen={isFilterOpen}
      />

      {/* Employee Table */}
<table className="employee-table">
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Department</th>
      <th>Role</th>
      <th>Status</th>
      <th>Date of Joining</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {paginatedEmployees.map((emp, i) => (
      <tr key={i}>
        <td>{emp.empid}</td>
        <td>{emp.firstName} {emp.lastName}</td>
        <td>{emp.email}</td>
        <td>{emp.department}</td>
        <td>{emp.role}</td>
        <td>{emp.status}</td>
        <td>{emp.dateofjoining}</td>
        <td>
          <div className="flex gap-2">
            <Link to={`/form?id=${emp.id}`}>
              <button className="px-2 py-1 bg-green-600 hover:bg-green-800 text-white rounded cursor-pointer">
                Edit
              </button>
            </Link>
           <button
  className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-800 cursor-pointer"
  onClick={() => {
      onDelete(emp.id);
    
  }}
>
  Delete</button>
          </div>
        </td>
      </tr>
    ))}
  </tbody>
</table>



      {/* Pagination Controls */}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span>
          Page {currentPage} / {totalPages || 1}
        </span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default EmployeeGrid;
