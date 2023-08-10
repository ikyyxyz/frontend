import React from "react";
import "./loginRegister.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import back from "../../assets/images/my-account.jpg";

const Register = () => {
  return (
    <>
      <section className="login">
        <div className="containers">
          <div className="backImg">
            <img src={back} alt="" />
            <div className="text">
              <h3>Register</h3>
              <h1>My Account</h1>
            </div>
          </div>
          <form action="/login">
            <span>Email address*</span>
            <input type="text" required />
            <span>Username*</span>
            <input type="text" required />
            <span>Password*</span>
            <input type="password" required />
            <button className="button">Register</button>
            <Link to="/login">Login</Link>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
