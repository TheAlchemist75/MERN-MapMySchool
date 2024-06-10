// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const { username, email, password } = formData;
//   const navigate = useNavigate();

//   const onChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     const newUser = { username, email, password };

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/auth/register",
//         newUser
//       );
//       console.log(res.data);
//     } catch (err) {
//       console.error(err.response.data);
//     }
//   };

//   const goToLogin = () => {
//     navigate("/login");
//   };

//   return (
//     <div>
//       <h1>Register</h1>
//       <form onSubmit={(e) => onSubmit(e)}>
//         <input
//           type="text"
//           placeholder="Username"
//           name="username"
//           value={username}
//           onChange={(e) => onChange(e)}
//           required
//         />
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
//         <button type="submit">Register</button>
//       </form>
//       <p>
//         Already have an account? <button onClick={goToLogin}>Login</button>
//       </p>
//     </div>
//   );
// };

// export default Register;

// --------------------------------------------------

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        newUser
      );
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/dashboard");
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={(e) => onChange(e)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => onChange(e)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => onChange(e)}
          required
        />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account?{" "}
        <button onClick={() => navigate("/login")}>Login</button>
      </p>
    </div>
  );
};

export default Register;
