import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

const AppRouter = () => {
  const isAuthenticated = !!localStorage.getItem("isAdmin");

  return (
    <Router basename="/admin">
      {" "}
      {/* הוספת basename */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
