import { CustomLink } from "./Navbar";

function Sidebar({ onClick }) {
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
          <CustomLink onClick={onClick} to={"/login"}>
            Log In
          </CustomLink>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
