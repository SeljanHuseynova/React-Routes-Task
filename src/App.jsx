import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
      setLoggedInUser(user);
    }
  }, []); 

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/login"
          element={
            loggedInUser ? (
              <Navigate to="/dashboard" />
            ) : (
              <Login setLoggedInUser={setLoggedInUser} />
            )
          }
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            loggedInUser ? (
              <Dashboard user={loggedInUser} setLoggedInUser={setLoggedInUser} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
