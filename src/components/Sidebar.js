import { useContext } from "react";
import { CustomLink } from "./Navbar";
import { AuthContext } from "../context/AuthContext";

function Sidebar({ onClick, logout }) {
  const { currentUser } = useContext(AuthContext);
  return (
    <aside>
      <button onClick={onClick} className="close-btn">
        x
      </button>
      <nav>
        <ul className="side-nav">
          <CustomLink onClick={onClick} to={"/"}>
            Current Data
          </CustomLink>
          <CustomLink onClick={onClick} to={"/history"}>
            History
          </CustomLink>
          <CustomLink onClick={onClick} to={"/profile"}>
            Profile
          </CustomLink>
          {currentUser ? (
            <CustomLink onClick={logout} to={"/login"}>
              Log Out
            </CustomLink>
          ) : (
            <CustomLink onClick={onClick} to={"/login"}>
              Log In
            </CustomLink>
          )}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
