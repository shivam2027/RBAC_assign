import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddNewRole = () => {
  const [formData, setFormData] = useState({
    user_id: "",
    name: "",
    Email: "",
    role: "",
  });

  const [error, setError] = useState(null);
  const [userExistsError, setUserExistsError] = useState(null); // Track if user ID already exists
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear user exists error when user modifies input
    if (name === "user_id") {
      setUserExistsError(null);
    }
  };

  // Check if user_id already exists
  const checkUserExists = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:3002/roles/${userId}`);
      return response.data.exists; // Assuming backend returns { exists: true/false }
    } catch (error) {
      console.error("Error checking user ID:", error);
      return false;
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (
      !formData.user_id ||
      !formData.name ||
      !formData.Email ||
      !formData.role
    ) {
      setError("All fields are required.");
      return;
    }

    // Check if user ID already exists
    const userExists = await checkUserExists(formData.user_id);
    if (userExists) {
      setUserExistsError("User ID already exists. Please use a different User ID.");
      return;
    }

    // Make the POST request to add the new role
    axios
      .post("http://localhost:3002/allRoles", formData)
      .then((res) => {
        alert("New role added successfully!");
        navigate("/roles");
      })
      .catch((error) => {
        console.error("Error adding role:", error);
        setError("User ID already exists! Please use a different User ID.");
      });
  };

  return (
    <div
      className="container"
      style={{
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        padding: "20px",
      }}
    >
      <div className="card shadow-lg">
        <div className="row">
          <div className="col-12 text-center mb-4 mt-3">
            <h2 className="text-primary">Add New Role</h2>
            <p className="text-muted">
              Fill in the details below to add a new role.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-10">
            <form onSubmit={handleSubmit}>
              {error && <div className="alert alert-danger">{error}</div>}
              {userExistsError && (
                <div className="alert alert-warning">{userExistsError}</div>
              )}

              <div className="mb-4">
                <label htmlFor="user_id" className="form-label fw-semibold">
                  User ID
                </label>
                <input
                  type="number"
                  className="form-control shadow-sm"
                  id="user_id"
                  name="user_id"
                  value={formData.user_id}
                  onChange={handleChange}
                  min="0"
                  placeholder="Enter User ID"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="name" className="form-label fw-semibold">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control shadow-sm"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Name"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="Email" className="form-label fw-semibold">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control shadow-sm"
                  id="Email"
                  name="Email"
                  value={formData.Email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="role" className="form-label fw-semibold">
                  Role
                </label>
                <input
                  type="text"
                  className="form-control shadow-sm"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="Enter Role"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100 shadow-sm mb-5">
                Add Role
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewRole;
