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
  return (
    <Router basename="/admin">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

// רכיב שמגן על כל עמוד לפי localStorage
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("isAdmin");
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default AppRouter;
