import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {

  const [cred, setCred] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault(); // synthetic event

    try {
      const response = await fetch("http://localhost:5000/api/loginuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: cred.email,
          password: cred.password,
        })
      });

      if (!response.ok) {
        // Handle HTTP errors
        const errorText = await response.text();
        console.error("Error response:", errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);

      if (!json.success) {
        alert("Enter Correct Credentials");
      } else {
        localStorage.setItem("send",json.send);
        console.log(localStorage.getItem("send"))
        navigate("/");
      }
    } catch (error) {
      console.error("Error during fetch:", error);
      alert("Incorrect Login Credentials");
    }
  }

  const onChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  }


  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2 className="signup-title">Already a User</h2>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            aria-describedby="emailHelp"
            name='email'
            value={cred.email}
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            name='password'
            value={cred.password}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <br />
        <div className="login-link-container">
          <Link to="/createuser" className="login-link">I'm a new user</Link>
        </div>
      </form>
    </div>
  )
}

export default Login
