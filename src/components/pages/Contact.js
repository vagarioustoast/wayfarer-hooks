import React from "react";
import { Route, Link } from "react-router-dom";
import Employees from "./Employees";

const Contact = () => (
  <>
    <section>
      <h1>Contact</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
        explicabo rerum eveniet architecto blanditiis voluptates vero possimus
        provident, doloremque a repudiandae sed laboriosam velit laudantium
        beatae obcaecati cum magni placeat.
      </p>
      <Link to="/employees">View our team</Link>
    </section>
    <section>
      <Route exact path="/contact/employees" component={Employees} />
    </section>
  </>
);

export default Contact;
