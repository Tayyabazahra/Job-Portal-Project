import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Auth() {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;

    if (!email || !password) {
      toast.error("Email and password are required!", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/auth/login", {
        email,
        password,
      });
      if (response.data.success) {
        toast.success("Login successful!", {
          position: "top-center",
          autoClose: 3000,
        });
        localStorage.setItem("token", response.data.jwtToken);
        localStorage.setItem("loggedInUser", response.data.name);
        setTimeout(() => navigate("/home"), 2000);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed!", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <div>
      <div className="containers"></div>
      <div className="form-container">
        <h2 className="form-tagline">👋 Welcome Back!</h2>

        <form className="login-form" onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="form-input">
            <i className="fas fa-user"></i>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={loginInfo.email}
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
              value={loginInfo.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Login Button */}
          <button type="submit" className="btn-primary">
            Login
          </button>

          {/* Google Login Button */}

          <button
  type="button"
  className="btn-google"
  onClick={() =>
    window.location.href = 'http://localhost:8000/auth/google?state=login'
  }
>
  <i className="fab fa-google"></i>
  Continue with Google
</button>


          <p className="signup-link">
            New here? &nbsp;
            <Link to="/signup" className="signup-link">
              Sign up
            </Link>
          </p>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Auth;
