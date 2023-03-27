import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav>
      <button className="hamburger-btn">
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul>
        <li>Current Data</li>
        <li>History</li>
        <li>Statistics</li>
        <li>Log In</li>
      </ul>
    </nav>
  );
}

export default Navbar;
