import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditPermission = () => {
  const { id } = useParams(); // Extract permission ID from the URL
  const navigate = useNavigate(); // For navigation after updating
  const [formData, setFormData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch current permission details
  useEffect(() => {
    axios
      .get(`http://localhost:3002/allPermissions/${id}`)
      .then((res) => {
        setFormData(res.data); // Populate the form with fetched data
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching permission data:", err);
        setError("Failed to load permission details.");
        setLoading(false);
      });
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3002/allPermissions/${id}`, formData)
      .then((res) => {
        alert("Permission updated successfully!");
        navigate("/permissions"); // Navigate back to the permissions list
      })
      .catch((err) => {
        console.error("Error updating permission:", err);
        alert("Failed to update the permission. Please try again.");
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
            <h2 className="text-primary">Edit Permission</h2>
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

              {/* Permission Name */}
              <div className="mb-3">
                <label htmlFor="permission_name" className="form-label">
                  Permission Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="permission_name"
                  name="permission_name"
                  value={formData.permission_name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Status */}
              <div className="mb-3">
                <label htmlFor="status" className="form-label">
                  Status
                </label>
                <select
                  className="form-select"
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
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

export default EditPermission;
