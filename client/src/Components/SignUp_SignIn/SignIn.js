import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sign.css";

const SignIn = () => {
  //   const { account, setAccount } = useContext(Logincontext);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  // console.log(data);

  const handleInput = (e) => {
    const { name, value } = e.target;

    setData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });

  };

  return (
    <section>
      <div className="sign_container">
        <div className="sign_header">
          <img
            src={
              "https://www.thesun.co.uk/wp-content/uploads/2022/02/Amazon-Logo-1024x426-1.png?strip=all&w=960"
            }
            alt="logo"
          />
        </div>
        <div className="sign_form">
          <form method="POST">
            <h1>Sign-In</h1>

            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                onChange={handleInput}
                value={data.email}
                id="email"
              />
            </div>
            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={handleInput}
                value={data.password}
                id="password"
                placeholder="At least 6 characters"
              />
            </div>
            <button type="submit" className="signin_btn">
              Sign In
            </button>
          </form>
        </div>
        <div className="create_accountinfo">
          <p>New to Amazon?</p>
          <button>
            {" "}
            <NavLink to="/register">Create your Amazon Account</NavLink>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
