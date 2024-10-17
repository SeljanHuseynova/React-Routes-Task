import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setLoggedInUser }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState({}); 

  const handleSubmit = (event) => {
    event.preventDefault(); 
    let isValid = true;
    let errors = {};

    if (!username) {
      errors.username = "Username cannot be empty.";
      isValid = false;
    }

    if (!password) {
      errors.password = "Password cannot be empty.";
      isValid = false;
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
      isValid = false;
    }

    setError(errors); 

    if (isValid) {
      const storedUsers = JSON.parse(localStorage.getItem("Users")) || [];
      let userExists = false;
      let currentUser = null;

      for (let i = 0; i < storedUsers.length; i++) {
        const user = storedUsers[i];
        if (user.username === username && user.password === password) {
          userExists = true;
          currentUser = user;
          break;
        }
      }

      if (userExists) {
        localStorage.setItem("currentUser", JSON.stringify(currentUser));

        setLoggedInUser(currentUser);

      
        navigate('/dashboard');
      } else {
        setError({ usercheck: "Invalid username or password." }); 
      }
    }
  };

  return (
    <div className="our-mission" id="our-mission">
      <div className="overlay">
        <div className="overlay-content">
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <span className="error">{error.username}</span> 
            
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="error">{error.password}</span> 
            
            <input type="submit" id="sbt-btn" value="Login" />
            <span className="error">{error.usercheck}</span> 
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
