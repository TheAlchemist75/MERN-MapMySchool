import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../api/dataService";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import "../Login/Login.css";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const newUser = { username, email, password };

    try {
      const res = await axios.post(`${API_URL}/api/auth/register`, newUser);
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/login");
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-image"></div>
        <div className="auth-content">
          <h1>Register</h1>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="input-group">
              <FaUser className="input-icon" />
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="input-group">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="input-group">
              <FaLock className="input-icon" />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <button type="submit">Register</button>
          </form>
          <p>
            Already have an account?{" "}
            <button onClick={() => navigate("/login")}>Login</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
