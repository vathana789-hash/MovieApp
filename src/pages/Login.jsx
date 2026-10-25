
import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Auth.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  function handleLogin(e) {
    e.preventDefault();

    alert("Login successfully! 🎬 Welcome back to MovieApp.");
  }

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleLogin}>
        <div className="auth-logo">
          <i className="bi bi-film"></i>
          <span>
            Movie<span className="red-text">App</span>
          </span>
        </div>

        <h1>Welcome Back!</h1>

        <p className="auth-subtitle">
          Login to enjoy your favorite movies.
        </p>

        <div className="auth-field">
          <label htmlFor="login-email">Email Address</label>
          <input
            id="login-email"
            type="email"
            placeholder="Enter your email"
            autoComplete="email"
            required
          />
        </div>

        <div className="auth-field">
          <label htmlFor="login-password">Password</label>

          <div className="password-wrapper">
            <input
              id="login-password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />

            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={
                showPassword ? "Hide password" : "Show password"
              }
            >
              <i
                className={`bi ${
                  showPassword ? "bi-eye-slash" : "bi-eye"
                }`}
              ></i>
            </button>
          </div>
        </div>

        <button type="submit" className="auth-button">
          Login
        </button>

        <p className="auth-footer">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>

        <Link to="/" className="back-home">
          <i className="bi bi-arrow-left"></i> Back to Home
        </Link>
      </form>
    </div>
  );
}

export default Login;
