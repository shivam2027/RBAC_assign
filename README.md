# RBAC Assignment Project

This project implements **Role-Based Access Control (RBAC)** to manage user roles and permissions effectively. It features a React-based frontend for user interaction and a Node.js/Express.js backend for API management.

## Features

### User Interface (UI/UX)
- **Responsive Design**: The frontend is designed with responsiveness in mind to provide a seamless experience across devices.
- **Form Validation**: Ensure all inputs are filled and valid before submission.
- **Error Handling**: Display appropriate error messages, including handling duplicate entries.
- **Intuitive Workflow**: Guided user interface for adding, updating, and managing roles.

### React Features
- **State Management**: Uses React's `useState` for managing form inputs and errors.
- **Dynamic Rendering**: Form fields and error messages are dynamically updated based on user interaction.
- **Routing**: Implements `react-router-dom` for seamless navigation.
- **Styling**: Utilizes modern styling techniques, including Bootstrap classes, for consistent and appealing design.

### Backend (Node.js/Express.js)
- **RESTful APIs**: Built to handle CRUD operations for users and roles.
- **Error Handling**: Provides meaningful error responses for client-side validation (e.g., duplicate user IDs).
- **Database Integration**: Communicates with the database for storing and retrieving user roles.

### RBAC (Role-Based Access Control)
- Add, edit, and manage user roles with unique IDs and associated permissions.
- Prevent duplicate entries with backend validation.
- Maintain a robust and secure role management system.

## **Setup Instructions**

### **Prerequisites**
- [Node.js](https://nodejs.org/) installed on your system.
- A code editor like [VS Code](https://code.visualstudio.com/).

### **Project Structure**
- **`backend/`**: Contains the backend server code.
- **`frontend/`**: Contains the React frontend code.
- **`README.md`**: This file with project details.

---

## **Running the Project**

### **1. Clone the Repository**
```bash
https://github.com/shivam2027/RBAC_assign.git
```
download the `.zip` file provided, extract it, and navigate to the extracted directory.

### **2. Start the Backend**
Open a terminal and navigate to the `backend` directory:
```bash
cd backend
npm install -y
npm start
```
This will start the backend server on the default port (e.g., `http://localhost:3002`).

### **3. Start the Frontend**
Open another terminal and navigate to the `frontend` directory:
```bash
cd frontend
npm install -y
npm start
```
This will start the frontend development server, typically on `http://localhost:3000`.

---

## **Usage**
- Navigate to `http://localhost:3000/admin` in your browser to use the application.
- Use the provided forms to add permissions and roles.
- Ensure the backend server is running to enable data submission and retrieval.

---

## **Additional Notes**
- Both backend and frontend need to run simultaneously in separate terminals.
- If you encounter any issues, check the console logs for errors.

Feel free to explore and modify the code as needed. Happy coding!
