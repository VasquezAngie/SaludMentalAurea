import { useState } from "react";
import { useAuth } from "../auth/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthResponse, AuthResponseError } from "../types/types";
import "../css/login.css";
import Layout from "../components/layout";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorResponse, setErrorResponse] = useState("");

  const auth = useAuth();
  const navigate = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const json = (await response.json()) as AuthResponse;
        if (json.body.accessToken && json.body.refreshToken) {
          auth.saveUser(json);

          const userRole = json.body.role; 
          switch (userRole) {
            case "admin":
              navigate("/admin/dashboard");
              break;
            case "user":
              navigate("/user/home");
              break;
            case "recepcionist":
              navigate("/recepcionist/home");
              break;
            case "doctor":
              navigate("/doctor/home");
          }
        }
      } else {
        const json = (await response.json()) as AuthResponseError;
        setErrorResponse(json.body.error);
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (auth.isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <Layout>
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h1>Login</h1>
          {!!errorResponse && <div className="error-message">{errorResponse}</div>}
          <label>Username</label>
          <input
            name="username"
            type="text"
            onChange={handleChange}
            value={username}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
          />
          <button type="submit" className="navbar-login-button">
            Iniciar sesión
          </button>
        </form>
      </div>
    </Layout>
  );
}
