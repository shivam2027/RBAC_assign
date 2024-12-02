
# **Assignment Project**

This project demonstrates a full-stack application that includes a **frontend** and a **backend**. It showcases CRUD operations, user-friendly forms, error handling, and integration of React and Node.js.

## **Features**
- **Frontend (React.js)**:
  - Forms for adding permissions and roles with real-time validation.
  - Dynamic error messages for duplicate entries and required fields.
  - Styled with responsive designs for better user experience.

- **Backend (Node.js, Express.js)**:
  - RESTful APIs for handling roles and permissions.
  - Error handling to detect duplicate user IDs and other invalid operations.
  - Uses Axios for HTTP requests.

- **Full-Stack Integration**:
  - Seamless communication between frontend and backend using APIs.
  - Provides clear error messages for invalid or duplicate submissions.

---

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
