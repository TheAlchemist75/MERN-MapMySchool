// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Login = ({ onLogin }) => {
//   // Receive onLogin as a prop
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const { email, password } = formData;
//   const navigate = useNavigate();

//   const onChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     const user = { email, password };

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         user
//       );
//       console.log(res.data);
//       // Call onLogin after successful login
//       onLogin();
//       navigate("/map-school"); // Redirect to MapSchool on successful login
//     } catch (err) {
//       console.error(err.response.data);
//     }
//   };

//   const goToRegister = () => {
//     navigate("/register");
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={(e) => onSubmit(e)}>
//         <input
//           type="email"
//           placeholder="Email"
//           name="email"
//           value={email}
//           onChange={(e) => onChange(e)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           name="password"
//           value={password}
//           onChange={(e) => onChange(e)}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//       <p>
//         Don't have an account? <button onClick={goToRegister}>Register</button>
//       </p>
//     </div>
//   );
// };

// export default Login;

// -----------------------------------------------------------------

//login.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = { email, password };

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        user
      );
      const token = res.data.token;
      localStorage.setItem("token", token);
      onLogin(token);
      navigate("/map-school");
    } catch (err) {
      console.error(err.response.data);
    }
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <button onClick={goToRegister}>Register</button>
      </p>
    </div>
  );
};

export default Login;
