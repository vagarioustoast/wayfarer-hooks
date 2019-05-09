import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [errors, setErrors] = useState();
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    city: "",
    password: "",
    password2: ""
  });

  const handleChange = e => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(newUser);

    try {
      const result = await axios.post(
        "http:localhost/4000/api/v1/auth/register",
        newUser,
        { withCredentials: true }
      );
      console.log(result);
    } catch (err) {
      console.error(err);
      setErrors(err.response.data.errors);
    }
  };

  const { name, email, password, password2, city } = newUser;
  return (
    <>
      {errors ? errors.map(error => `${error.message}. `) : null}
      <section className="form">
        <h1>Register</h1>
        <article className="pa4 black-80">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={name}
                placeholder="Name"
                required
                onChange={handleChange}
              />
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
                name="city"
                value={city}
                placeholder="City"
                required
                onChange={handleChange}
              />
              <input
                type="text"
                name="password"
                value={password}
                placeholder="Password"
                required
                onChange={handleChange}
              />
              <input
                type="text"
                name="password2"
                value={password2}
                placeholder="Confirm password"
                required
                onChange={handleChange}
              />
              <div className="mt3">
                <input
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
                  value="Submit"
                />
              </div>
            </form>
          </fieldset>
        </article>
      </section>
    </>
  );
};

export default Register;
