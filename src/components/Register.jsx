import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});


  const validateInputs = (event) => {
    event.preventDefault();
    const errors = {};
    let isValid = true;
    const usernameValid = /^[a-zA-Z]+$/.test(username);
    const passwordValid = /^[0-9]+$/.test(password);
    const emailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);


    if (!username) {
      errors.username = 'Username is required.';
      isValid=false
    } else if (!usernameValid) {
      errors.username = 'Username must contain only letters.';
      isValid=false
    }

    if (!password) {
      errors.password = 'Password is required.';
      isValid = false
    } else if (!passwordValid) {
      errors.password = 'Password must contain only numbers.';
      isValid =false
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters.';
      isValid=false
    }

    if (!email) {
      errors.email = 'Email is required.';
      isValid=false
    } else if (!emailValid) {
      errors.email = 'Not a valid Email.';
      isValid=false
    }

    const userArray = JSON.parse(localStorage.getItem('Users')) || [];
    
    
    const usernameExists = userArray.some(user => user.username === username);
    if (usernameExists) {
      errors.username = 'Username already exists.';
      isValid=false
    }

    const emailExists = userArray.some(user => user.email === email);
    if (emailExists) {
      errors.email = 'Email is already in use.';
      isValid=false
    }

   
    setError(errors);

   
   if(isValid) {

    const newUser = { username, email, password };
    userArray.push(newUser);
    localStorage.setItem('Users', JSON.stringify(userArray));

    setUsername("");
    setEmail("");
    setPassword("");
    alert("Registration successful!");
    navigate('/login');
  };
}

  return (
    <div className="our-mission" id="our-mission">
    <div className="overlay">
      <div className="overlay-content">
        <form className="registerForm form" onSubmit={validateInputs}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <span className="error">{error.username}</span> 
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <span className="error">{error.email}</span>
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

export default Register;
