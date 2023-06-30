import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Sign.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginContext } from "../Context/Context";

const SignIn = () => {
  const { account, setAccount } = useContext(LoginContext);
  const redirect = useNavigate("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const reply = await res.json();

    if (res.status === 422 || !data) {
      toast.warn(reply.error, {
        position: "top-center",
      });
    } else {
      redirect("/");
      setAccount(reply);
      toast.success("Login Sucess", {
        position: "top-center",
      });
      setData({
        ...data,
        email: "",
        password: "",
      });
    }
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
            <button type="submit" className="signin_btn" onClick={handleSubmit}>
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
        <ToastContainer />
      </div>
    </section>
  );
};

export default SignIn;
