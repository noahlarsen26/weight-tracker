function Sidebar({ onClick }) {
  return (
    <aside>
      <button onClick={onClick} className="close-btn">
        x
      </button>
      <nav>
        <ul className="side-nav">
          <li>current data</li>
          <li>history</li>
          <li>profile</li>
          <li>log in</li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
