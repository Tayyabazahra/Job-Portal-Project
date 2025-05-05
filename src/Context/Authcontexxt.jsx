import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Create Context
const AuthContext = createContext();

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Check if user is already logged in (when app loads)
  useEffect(() => {
    const token = localStorage.getItem("token");
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (token && loggedInUser) {
      setUser({ name: loggedInUser, token });
    }
    setLoading(false);
  }, []);

  // Login Function
  const login = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:8000/auth/login", {
        email,
        password,
      });

      if (response.data.success) {
        localStorage.setItem("token", response.data.jwtToken);
        localStorage.setItem("loggedInUser", response.data.name);
        setUser({ name: response.data.name, token: response.data.jwtToken });
        navigate("/home");
      }
    } catch (error) {
      console.error("Login failed:", error);
      throw error.response?.data?.message || "Login failed!";
    }
  };

  // Signup Function
  const signup = async (name, email, password) => {
    try {
      const response = await axios.post("http://localhost:8000/auth/signup", {
        name,
        email,
        password,
      });

      if (response.data.success) {
        navigate("/login");
      }
    } catch (error) {
      console.error("Signup failed:", error);
      throw error.response?.data?.message || "Signup failed!";
    }
  };

  // Logout Function
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
