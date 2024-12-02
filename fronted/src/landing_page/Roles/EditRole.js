import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditRole = () => {
  const { id } = useParams(); //Extract ID from the URL
  const navigate = useNavigate(); // For navigation after updating
  const [formData, setFormData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch current roles details
  useEffect(() => {
    axios
      .get(`http://localhost:3002/allRoles/${id}`)
      .then((res) => {
        setFormData(res.data); // Populate the form with fetched data
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching role data:", err);
        setError("Failed to load role details.");
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3002/allRoles/${id}`, formData)
      .then((res) => {
        alert("Role updated successfully!");
        navigate("/roles");
      })
      .catch((err) => {
        console.error("Error updating role:", err);
        alert("Failed to update the role. Please try again.");
      });
  };

  if (loading) {
    return <div>Loading permission details...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

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
             <h2 className="text-primary">Edit Role</h2>
          </div>
        </div>

       <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
        <form onSubmit={handleSubmit}>
          {/* User ID */}
          <div className="mb-3">
            <label htmlFor="user_id" className="form-label">
              User ID
            </label>
            <input
              type="number"
              className="form-control"
              id="user_id"
              name="user_id"
              value={formData.user_id}
              onChange={handleChange}
              readOnly // Disable editing for user ID
            />
          </div>

          {/* Name */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              readOnly
            />
          </div>

          {/* User Email */}
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="Email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              readOnly // Disable editing for user ID
            />
          </div>

          {/* Role Name */}
          <div className="mb-3">
            <label htmlFor="role" className="form-label">
              Role
            </label>
            <input
              type="text"
              className="form-control"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            />
          </div>

          {/* Update Button */}
          <button type="submit" className="btn btn-primary mb-5">
            Update
          </button>
        </form>
        </div>
       </div>
      </div>
    </div>
  );
};

export default EditRole;
