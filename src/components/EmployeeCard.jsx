import { Link } from "react-router-dom";

function EmployeeCard({ emp, onDelete }) {
  return (
    <div className="employee-card">
      <strong>{emp.firstName} {emp.lastName}</strong>
      <p><strong>Email:</strong> {emp.email}</p>
      <p><strong>Department:</strong> {emp.department}</p>
      <p><strong>Role:</strong> {emp.role}</p>
      <div className="card-actions">
        <Link to={`/form?id=${emp.id}`}>
          <button>Edit</button>
        </Link>
        <button onClick={() => onDelete(emp.id)}>Delete</button>
      </div>
    </div>
  );
}

export default EmployeeCard;
