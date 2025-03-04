import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css"; 

function Signup() {
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo({ ...signupInfo, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;

    if (!name || !email || !password) {
      toast.error("All fields are required!", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/auth/signup", {
        name,
        email,
        password,
      });
      if (response.data.success) {
        toast.success("Signup successful!", {
          position: "top-center",
          autoClose: 3000,
        });
        setTimeout(() => navigate("/login"), 3000);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed!", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <div>
      <div className="containers"></div>
      <div className="form-container">
        <h2 className="form-tagline">🚀 Create Your Account!</h2>

        <form className="login-form" onSubmit={handleSignup}>
          <div className="form-input">
            <i className="fas fa-user"></i>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={signupInfo.name}
              onChange={handleChange}
              required
            />
          </div>
          
          
          
          {/* Email Input */}
          <div className="form-input">
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={signupInfo.email}
              onChange={handleChange}
              required
            />
          </div>



          {/* Password Input */}
          <div className="form-input">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={signupInfo.password}
              onChange={handleChange}
              required
            />
          </div>


          {/* Signup Button */}
          <button type="submit" className="btn-primary">
            Sign Up
          </button>


          <button
            type="button"
            className="btn-google"
            onClick={() =>
              (window.location.href =
                "http://localhost:8000/auth/google?state=signup")
            }
          >
            <i className="fab fa-google"></i>
            Continue with Google
          </button>
          <p className="signup-link">
            Already have an account? &nbsp;
            <Link to="/login" className="signup-link">
              Login
            </Link>
          </p>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Signup;
