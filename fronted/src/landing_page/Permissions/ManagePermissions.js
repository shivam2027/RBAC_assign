import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ManagePermissions = () => {
  const [allPermissions, setAllPermissions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch permissions
  useEffect(() => {
    axios.get("http://localhost:3002/allPermissions").then((res) => {
      setAllPermissions(res.data);
    });
  }, []);

  const filteredPermissions = allPermissions.filter((permission) => {
    const { user_id, permission_name, status } = permission;
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    const lowercasedStatus = status.trim().toLowerCase();
    return (
      user_id.toString().includes(lowercasedSearchTerm) ||
      permission_name.toLowerCase().includes(lowercasedSearchTerm) ||
      lowercasedStatus.includes(lowercasedSearchTerm)
    );
  });

  const deletePermission = (id) => {
    if (window.confirm("Are you sure you want to delete this permission?")) {
      axios.delete(`http://localhost:3002/allPermissions/${id}`).then(() => {
        setAllPermissions((prevPermissions) =>
          prevPermissions.filter((perm) => perm._id !== id)
        );
      });
    }
  };

  return (
    <div className="container text-center mt-4">
      <div className="card shadow-lg">
        {/* Header */}
        <div className="row mt-3">
          <h3 className="text-success fw-bold">Manage Permissions</h3>
          <p className="text-muted">
            Easily manage permissions for your system (
            {filteredPermissions.length}
            total).
          </p>
        </div>

        {/* Search Bar */}
        <div className="row justify-content-center mt-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control shadow-sm"
              placeholder="Search by User ID or Permission"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Add New Permission Button */}
        <div className="row justify-content-center mt-4">
          <div className="col-md-6 text-end">
            <Link to="/permissions/new">
              <button className="btn btn-success btn-lg shadow-sm">
                <i className="fas fa-plus-circle me-2"></i>Add New Permission
              </button>
            </Link>
          </div>
        </div>

        {/* Permissions Table */}
        <div className="row mt-4">
          <div className="col-12">
            <table className="table table-striped table-hover align-middle">
              <thead className="table-success sticky-top">
                <tr>
                  <th>ID</th>
                  <th>Permission Name</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredPermissions.map((permission) => (
                  <tr key={permission._id}>
                    <td>{permission.user_id}</td>
                    <td>{permission.permission_name}</td>
                    <td>
                      <span
                        className={`badge ${
                          permission.status === "Active"
                            ? "bg-success"
                            : "bg-secondary"
                        }`}
                      >
                        {permission.status}
                      </span>
                    </td>
                    <td>
                      <Link to={`/permissions/${permission._id}`} title="Edit Role">
                        <button className="btn btn-primary btn-sm me-2">
                          <i className="fas fa-edit"></i>
                        </button>
                      </Link>
                      <button
                        className="btn btn-danger btn-sm"
                        title="Delete Role"
                        onClick={() => deletePermission(permission._id)}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredPermissions.length === 0 && (
              <p className="text-muted mt-3">No permissions found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagePermissions;
