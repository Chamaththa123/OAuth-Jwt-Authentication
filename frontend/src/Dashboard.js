import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  
  const [user, setUser] = useState(null);
  const [token, seToken] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    if (storedToken) {
      seToken(storedToken);
    }
  }, []);

  if (!user) {
    return <p>Loading user data...</p>;
  }

  if (!token) {
    navigate("/");
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Welcome, {user.name}!</h1>
        <img
          src={user.picture}
          alt={user.name}
          style={{ borderRadius: "50%", marginTop: "20px" }}
        />
        <p style={{ marginTop: "10px" }}>Email: {user.email}</p>
        <p>User ID: {user.id}</p>
        <p>Account Created: {new Date(user.created_at).toLocaleString()}</p>
        <button
          onClick={handleLogout}
          style={{
            marginTop: "30px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
