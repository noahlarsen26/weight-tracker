import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <button className="hamburger-btn">
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul>
        <CustomLink to={"/"}>Current Data</CustomLink>
        <CustomLink to={"/history"}>History</CustomLink>
        <CustomLink to={"/profile"}>Profile</CustomLink>
        <CustomLink to={"/login"}>Log In</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
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
