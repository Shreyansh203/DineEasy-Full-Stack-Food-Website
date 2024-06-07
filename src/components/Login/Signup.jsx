import React, { useState } from 'react';
import './Signup.css'; // Import the CSS file
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [cred, setCred] = useState({ name: "", email: "", password: "", geolocation: "" });
  const [error, setError] = useState(null); // State for error message

  const handleSubmit = async (e) => {
    e.preventDefault(); // synthetic event

    try {
      const response = await fetch("http://localhost:5000/api/createuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: cred.name,
          email: cred.email,
          password: cred.password,
          location: cred.geolocation
        })
      });

      if (!response.ok) {
        // Handle HTTP errors
        const errorText = await response.text();
        console.error("Error response:", errorText);
        setError(`HTTP error! status: ${response.status}`);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
      if (!json.success) {
        alert("Enter Correct Credentials");
      } 
    } catch (error) {
      console.error("Error during fetch:", error);
      setError("Incorrect Signup Credentials");
    }
  };

  const onChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2 className="signup-title">Create Account</h2>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            name="name"
            value={cred.name}
            onChange={onChange}
          />
        </div>
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
            name="email"
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
            name="password"
            value={cred.password}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="geolocation" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="geolocation"
            placeholder="Enter your address"
            name="geolocation"
            value={cred.geolocation}
            onChange={onChange}
          />
        </div>
        {error && <div className="error-message">{error}</div>} {/* Display error message */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <br />
        <div className="login-link-container">
          <Link to="/login" className="login-link">Already a user? Log in</Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
