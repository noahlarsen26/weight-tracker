import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar({ onClick }) {
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(AuthContext);
  return (
    <nav className="navbar">
      <button onClick={onClick} className="hamburger-btn">
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul>
        <CustomLink to={"/"}>Current Data</CustomLink>
        <CustomLink to={"/history"}>History</CustomLink>
        <CustomLink to={"/profile"}>Profile</CustomLink>
        {currentUser ? (
          <CustomLink
            onClick={() => dispatch({ type: "LOGOUT" })}
            to={"/login"}
          >
            Log Out
          </CustomLink>
        ) : (
          <CustomLink to={"/login"}>Log In</CustomLink>
        )}
      </ul>
    </nav>
  );
}

export function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
