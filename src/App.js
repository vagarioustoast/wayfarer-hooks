import React, { useState } from "react";
import NavBar from "./components/layout/NavBar";
import Routes from "./config/routes";
import axios from "axios";
import "./App.css";

const App = ({ history }) => {
  const [currentUser, setCurrentUser] = useState(localStorage.currentUser);

  const handleLogout = async () => {
    if (
      localStorage.currentUser &&
      window.confirm("Are you sure you want to logout?")
    ) {
      localStorage.clear();
      const response = await axios.post(
        `${process.env.REACT_APP_API}/auth/logout`,
        { withCredentials: true }
      );
      history.push("/login");
    }
  };

  return (
    <>
      <NavBar currentUser={currentUser} logout={handleLogout} />
      <main>
        <Routes currentUser={currentUser} />
      </main>
    </>
  );
};

export default App;
