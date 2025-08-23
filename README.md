# Employee Directory React App

A simple **Employee Directory** built with **React** and **Tailwind CSS**.  
It allows you to **view, add, edit, and delete employees**, with support for filtering, sorting, and pagination.

---

## Live Demo:
👉 [**Click here to view the deployed site**](https://restaurant-reservation-ui.netlify.app/)

---
## Features

- Display employee list in **table** or **card** view.
- Add new employees with fields:
  - Employee ID
  - First Name
  - Last Name
  - Email
  - Department (HR, IT, Finance)
  - Role (Manager, Developer, Analyst)
  - Status (Active / Inactive)
  - Date of Joining
- Edit existing employee details.
- Delete employee with confirmation.
- Filter employees by name, department, and role.
- Sort employees by first name or department.
- Pagination support for large lists.
- Responsive design with **Tailwind CSS**.
- Data persistence using **localStorage**.

---

## Folder Structure

```

employee-directory/
├─ public/
│  ├─ index.html
│  └─ favicon.ico
├─ src/
│  ├─ components/
│  │  ├─ EmployeeGrid.jsx
│  │  ├─ EmployeeCard.jsx
│  │  ├─ EmployeeForm.jsx
│  │  ├─ FilterSidebar.jsx
│  │  └─ Header.jsx
│  ├─ data/
│  │  └─ initialEmployees.js
│  ├─ App.jsx
│  ├─ index.jsx
│  └─ styles.css
├─ package.json
└─ README.md

````

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/nandhinigurumoorthyy/Employee-Management-System.git
````

2. Install dependencies:

```bash
cd Employee-Management-System
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open your browser at `http://localhost:5173` (or the port Vite shows).

---

## Usage

* **View Employees**: Default page shows all employees in a table or card view.
* **Add Employee**: Click `Add Employee` button → fill form → submit.
* **Edit Employee**: Click `Edit` on an employee row or card → update details → submit.
* **Delete Employee**: Click `Delete` → confirm → employee is removed.
* **Filter & Sort**: Use filter sidebar or sort dropdown to manage the employee list.
* **Pagination**: Change page size dropdown to view more employees at a time.

---

## Technologies Used

* **React 18**
* **React Router v6** for routing
* **Tailwind CSS** for styling
* **LocalStorage** for persistent data
* **JavaScript (ES6+)**

---

## Notes

* Employee data is stored in browser **localStorage**, so it persists across refreshes.
* Default employees are available in `src/data.js`.
