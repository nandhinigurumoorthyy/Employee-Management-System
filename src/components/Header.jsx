import { Link } from "react-router-dom";

function Header({ searchTerm, setSearchTerm, sortKey, setSortKey, pageSize, setPageSize }) {
  return (
    <header>
      <div className="">
        <h1 className="text-5xl py-8">Employee Directory</h1>

        {/* Search Box */}
        <div className="search-box">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name or email"
            className="border-2 border-gray-500 p-3 rounded-lg mb-5"
          />
        </div>

        {/* Sort + Page Size */}
        <div className="second-header py-4 flex gap-5">
          <div>
          <label htmlFor="sortSelect">Sort:</label>
          <select id="sortSelect" value={sortKey} onChange={(e) => setSortKey(e.target.value)} className="border-gray-700 border-2 rounded-sm ml-2 cursor-pointer">
            <option value="">--Select--</option>
            <option value="firstName">First Name</option>
            <option value="department">Department</option>
          </select>
</div><div>
          <label htmlFor="pageSizeSelect">Show:</label>
          <select
            id="pageSizeSelect"
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="border-gray-700 border-2 rounded-sm ml-2 cursor-pointer"
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select></div>
        </div>

        {/* Add Employee */}
        <Link to="/form">
          <button id="add-employee-button" className="cursor-pointer border-2 p-3 border-gray-600 rounded-2xl hover:rounded-4xl">Add Employee</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
