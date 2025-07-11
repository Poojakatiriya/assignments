import React, { useState } from "react";
import api from "../api/axios";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/login", form);
      localStorage.setItem("token", res.data.token);
      alert("✅ Login successful!");
      window.location.href = "/";
    } catch (err) {
      alert("❌ Login failed");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form onSubmit={handleLogin} className="bg-white p-5 shadow rounded" style={{ minWidth: "300px" }}>
        <h3 className="mb-4 text-center text-primary">🔐 Login</h3>

        <div className="mb-3">
          <input type="email" className="form-control" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <input type="password" className="form-control" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
        </div>

        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
};

export default Login;


