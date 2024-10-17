import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ user, setLoggedInUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setLoggedInUser(null); 

    navigate("/login");
  };

  return (
    <div>
      <div className="our-mission" id="our-mission">
        <div className="overlay">
          <div className="overlay-content">
            {user ? (
              <div>
                <h1>Welcome, {user.username}!</h1>
                <p>Email: {user.email}</p>
              </div>
            ) : (
              <h1>Welcome, Guest!</h1>
            )}
            <button onClick={handleLogout} id="sbt-btn">Log Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

