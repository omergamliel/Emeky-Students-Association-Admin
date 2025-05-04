import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isAdmin");
    if (!isLoggedIn) {
      navigate("/admin/login");
    }
  }, [navigate]);

  return (
    <div
      className="dashboard-page"
      style={{ padding: "2rem", textAlign: "right" }}
    >
      <h2>ברוך הבא למערכת הניהול</h2>
      <p>כאן תוכל לנהל את כל הפעילויות של אגודת הסטודנטים.</p>
    </div>
  );
};

export default Dashboard;
