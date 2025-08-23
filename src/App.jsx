import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import EmployeeGrid from "./components/EmployeeGrid";
import EmployeeForm from "./components/EmployeeForm";
import Footer from "./components/Footer";
import { initialEmployees } from "./data";

function App() {
  const [employees, setEmployees] = useState(() => {
    const saved = localStorage.getItem("employeesData");
    return saved ? JSON.parse(saved) : initialEmployees;
  });

  useEffect(() => {
    localStorage.setItem("employeesData", JSON.stringify(employees));
  }, [employees]);

  return (
<div className="relative text-cyan-900 min-h-screen px-12">
  <div className="absolute inset-0 bg-[url('../public/bg.jpg')] bg-cover bg-center opacity-30"></div>
  <div className="relative z-10">
    <Router>
      <div className="page-container">
        <Routes>
          <Route
            path="/"
            element={<EmployeeGrid employees={employees} setEmployees={setEmployees} />}
          />
          <Route
            path="/form"
            element={<EmployeeForm employees={employees} setEmployees={setEmployees} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
    </div>
    </div>
  );
}

export default App;
