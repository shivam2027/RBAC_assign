import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ManageRoles = () => {
  const [allRoles, setAllRoles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3002/allRoles").then((res) => {
      setAllRoles(res.data);
    });
  }, []);

  const filteredRoles = allRoles.filter((user) => {
    const { user_id, name, Email, role } = user;
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    return (
      user_id.toString().includes(lowercasedSearchTerm) ||
      name.toLowerCase().includes(lowercasedSearchTerm) ||
      Email.toLowerCase().includes(lowercasedSearchTerm) ||
      role.toLowerCase().includes(lowercasedSearchTerm)
    );
  });

  const deleteRole = (id) => {
    if (window.confirm("Are you sure you want to delete this role?")) {
      axios
        .delete(`http://localhost:3002/allRoles/${id}`)
        .then(() => {
          setAllRoles((prevRoles) =>
            prevRoles.filter((role) => role._id !== id)
          );
        })
        .catch((error) => {
          console.error("There was an error deleting the role:", error);
        });
    }
  };

  return (
    <div className="container text-center mt-4">
      <div className="card shadow-lg">
        <div className="row mt-3">
          <h3 className="text-success fw-bold">Manage Roles</h3>
          <p className="text-muted">({filteredRoles.length} roles found)</p>
        </div>
        
          {/* Search Bar */}
          <div className="row justify-content-center mt-3">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control shadow-sm"
                placeholder="Search by User ID, Name, Email, or Role"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Add Role Button */}
          <div className="row justify-content-center mt-4">
            <div className="col-md-6 text-end">
              <Link to="/roles/new">
                <button className="btn btn-success btn-lg shadow-sm">
                  <i className="fas fa-plus-circle me-2"></i> Add New Role
                </button>
              </Link>
            </div>
          </div>

          {/* Roles Table */}
          <div className="row mt-4">
            <div className="col-12">
              <table className="table table-striped table-hover align-middle">
                <thead className="table-success sticky-top">
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRoles.length > 0 ? (
                    filteredRoles.map((user) => (
                      <tr key={user._id}>
                        <td>{user.user_id}</td>
                        <td>{user.name}</td>
                        <td>{user.Email}</td>
                        <td>{user.role}</td>
                        <td>
                          <Link to={`/roles/${user._id}`} title="Edit Role">
                            <button className="btn btn-primary btn-sm me-2">
                              <i className="fas fa-edit"></i>
                            </button>
                          </Link>
                          <button
                            className="btn btn-danger btn-sm"
                            title="Delete Role"
                            onClick={() => deleteRole(user._id)}
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center text-muted">
                        No roles found. Use the "Add New Role" button to create
                        one.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default ManageRoles;
