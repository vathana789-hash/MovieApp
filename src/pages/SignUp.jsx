
import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Auth.css";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  function handleSignUp(e) {
    e.preventDefault();

    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    alert("Account created successfully! Welcome to MovieApp.");
  }

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleSignUp}>
        <div className="auth-logo">
          <i className="bi bi-film"></i>
          <span>Movie<span className="red-text">App</span></span>
        </div>

        <h1>Create Account</h1>
        <p className="auth-subtitle">
          Join MovieApp and discover great movies.
        </p>

        <div className="auth-field">
          <label htmlFor="signup-name">Full Name</label>
          <input
            id="signup-name"
            name="fullName"
            type="text"
            placeholder="Enter your full name"
            autoComplete="name"
            required
          />
        </div>

        <div className="auth-field">
          <label htmlFor="signup-email">Email Address</label>
          <input
            id="signup-email"
            name="email"
            type="email"
            placeholder="Enter your email"
            autoComplete="email"
            required
          />
        </div>

        <div className="auth-field">
          <label htmlFor="signup-password">Password</label>
          <div className="password-wrapper">
            <input
              id="signup-password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="At least 8 characters"
              autoComplete="new-password"
              minLength={8}
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
            </button>
          </div>
        </div>

        <div className="auth-field">
          <label htmlFor="signup-confirm-password">Confirm Password</label>
          <input
            id="signup-confirm-password"
            name="confirmPassword"
            type="password"
            placeholder="Enter your password again"
            autoComplete="new-password"
            required
          />
        </div>

        {error && <p className="auth-error">{error}</p>}

        <button type="submit" className="auth-button">
          Create Account
        </button>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>

        <Link to="/" className="back-home">
          <i className="bi bi-arrow-left"></i> Back to Home
        </Link>
      </form>
    </div>
  );
}

export default SignUp;
