import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function EmployeeForm({ employees, setEmployees }) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const editingId = searchParams.get("id");

  const [form, setForm] = useState({
    empid: "",
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    role: "",
    status: "",
    dateofjoining: "",
  });

  useEffect(() => {
    if (editingId) {
      const emp = employees.find((e) => e.id === Number(editingId));
      if (emp) setForm(emp);
    }
  }, [editingId, employees]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.empid ||
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.department ||
      !form.role ||
      !form.status ||
      !form.dateofjoining
    ) {
      alert("Please fill all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      alert("Invalid email format");
      return;
    }

    if (editingId) {
      setEmployees(
        employees.map((emp) =>
          emp.id === Number(editingId) ? { ...form, id: Number(editingId) } : emp
        )
      );
    } else {
      setEmployees([...employees, { ...form, id: Date.now() }]);
    }

    navigate("/");
  };

  return (
    <div className="pt-5 flex justify-center">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          {editingId ? "Edit Employee" : "Add Employee"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Employee ID</label>
            <input
              type="text"
              value={form.empid}
              onChange={(e) =>
                setForm({ ...form, empid: e.target.value })
              }
              className="w-full border p-2 rounded-md"
            />
          </div>

          <div>
            <label className="block text-gray-700">First Name</label>
            <input
              type="text"
              value={form.firstName}
              onChange={(e) =>
                setForm({ ...form, firstName: e.target.value })
              }
              className="w-full border p-2 rounded-md"
            />
          </div>

          <div>
            <label className="block text-gray-700">Last Name</label>
            <input
              type="text"
              value={form.lastName}
              onChange={(e) =>
                setForm({ ...form, lastName: e.target.value })
              }
              className="w-full border p-2 rounded-md"
            />
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full border p-2 rounded-md"
            />
          </div>

          <div>
            <label className="block text-gray-700">Department</label>
            <select
              value={form.department}
              onChange={(e) =>
                setForm({ ...form, department: e.target.value })
              }
              className="w-full border p-2 rounded-md"
            >
              <option value="">Select</option>
              <option value="HR">HR</option>
              <option value="IT">IT</option>
              <option value="Finance">Finance</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Role</label>
            <select
              value={form.role}
              onChange={(e) =>
                setForm({ ...form, role: e.target.value })
              }
              className="w-full border p-2 rounded-md"
            >
              <option value="">Select</option>
              <option value="Manager">Manager</option>
              <option value="Developer">Developer</option>
              <option value="Analyst">Analyst</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Status</label>
            <select
              value={form.status}
              onChange={(e) =>
                setForm({ ...form, status: e.target.value })
              }
              className="w-full border p-2 rounded-md"
            >
              <option value="">Select</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Date of Joining</label>
            <input
              type="date"
              value={form.dateofjoining}
              onChange={(e) =>
                setForm({ ...form, dateofjoining: e.target.value })
              }
              className="w-full border p-2 rounded-md"
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmployeeForm;
