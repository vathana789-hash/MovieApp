
import { NavLink } from "react-router-dom";
import "../css/navbar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/">Movie App</NavLink>
      </div>

      <div className="navbar-links">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/trending"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Trending
        </NavLink>

        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Favorites
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <i className="bi bi-person-circle"></i>
          Login
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
