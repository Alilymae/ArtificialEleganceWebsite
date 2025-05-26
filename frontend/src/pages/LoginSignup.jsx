import React from "react";
import "./CSS/LoginSignup.css";
import { useState } from "react";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const login = async () => {
    console.log("Login done", formData);
    let responseData;
    await fetch("https://backend-lvd9.onrender.com/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  const signup = async () => {
    console.log("Signup done", formData);
    let responseData;
    await fetch("https://backend-lvd9.onrender.com/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  return (
    <>
      <div className="signup">
        <div className="signupcon">
          <h1>{state}</h1>
          <div className="fields">
            {state === "Sign Up" ? (
              <input
                name="username"
                value={formData.username}
                onChange={handleChange}
                type="text"
                placeholder="Name"
              />
            ) : (
              <></>
            )}
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email Address"
            />
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              type="password"
              placeholder="Password"
            />
          </div>
          <button
            onClick={() => {
              state === "Login" ? login() : signup();
            }}
          >
            Continue
          </button>
          {state === "SIgn Up" ? (
            <p className="tologin">
              Already have an account?
              <span onClick={() => setState("Login")}>Login</span>
            </p>
          ) : (
            <p className="tologin">
              Create an Account?
              <span onClick={() => setState("Sign Up")}>Click Here</span>
            </p>
          )}

          <div className="signupagree">
            <input type="checkbox" name="" id="" />
            <p>By continuing, I agree to the terms and conditions</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
