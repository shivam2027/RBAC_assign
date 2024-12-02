import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container text-center mt-5">
      <div className="card shadow-lg">
        {/* Header Section */}
        <div className="row bg-success-subtle rounded-3 p-4 shadow-sm">
          <h1 className="fw-bold text-success">Admin Dashboard</h1>
          <p className="text-muted">
            Manage your system roles and permissions efficiently.
          </p>
        </div>

        {/* Main Action Cards */}
        <div className="row mt-5">
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <i className="fas fa-users-cog text-success display-4 mb-3"></i>
                <h5 className="card-title fw-bold">Manage Roles</h5>
                <p className="card-text text-muted">
                  Create, update, and assign roles to users effortlessly.
                </p>
                <Link to="/roles" style={{ textDecoration: "none" }}>
                  <button type="button" className="btn btn-success">
                    Go to Roles
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <i className="fas fa-key text-success display-4 mb-3"></i>
                <h5 className="card-title fw-bold">Manage Permissions</h5>
                <p className="card-text text-muted">
                  Configure user access rights and system permissions.
                </p>
                <Link to="/permissions" style={{ textDecoration: "none" }}>
                  <button type="button" className="btn btn-success">
                    Go to Permissions
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
