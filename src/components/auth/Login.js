import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

const Login = ({ setCurrentUser, history }) => {
  const [errors, setErrors] = useState(null);
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });
  const handleChange = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/auth/login`,
        userData,
        {
          withCredentials: true
        }
      );

      const currentUser = res.data.currentUser;
      localStorage.currentUser = currentUser;

      setCurrentUser(currentUser);
      history.push(`/profile/${currentUser}`);
    } catch (err) {
      console.error(err);
      setErrors(err.response.data.error);
    }
  };

  const { email, password } = userData;

  return (
    <>
      <div>
        {errors ? errors.map(error => `${error.message}. `) : null}
        <section>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              value={email}
              placeholder="E-mail"
              required
              onChange={handleChange}
            />
            <input
              type="text"
              name="password"
              value={password}
              placeholder="Enter password"
              required
              onChange={handleChange}
            />
            <input type="submit" />
          </form>
        </section>
      </div>
    </>
  );
};

export default Login;
