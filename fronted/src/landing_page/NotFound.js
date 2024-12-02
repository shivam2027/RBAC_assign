import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100 text-center">
      <div className="card shadow-lg p-4">
        <div className="card-body">
          <h1 className="display-3 text-danger mb-4">404</h1>
          <h2 className="mb-3">Page Not Found</h2>
          <p className="text-muted mb-4">
            Oops! The page you are looking for doesn't exist or has been moved.
          </p>
         
          <Link to="/admin" className="btn btn-primary btn-lg">
            <i className="bi bi-house"></i> Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
