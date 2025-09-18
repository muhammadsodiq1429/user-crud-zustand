import { memo } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black mb-4">
      <nav className="container navbar h-20 flex items-center">
        <div className="navbar__logo h-2/3 flex-1">
          <Link to={"/"}>
            <img src="./sodiqscript-logo.svg" alt="" className="h-full" />
          </Link>
        </div>
        <ul className="navbar__logo flex gap-4 text-white">
          <li>
            <NavLink to="/">Users</NavLink>
          </li>
          <li>
            <NavLink to="user-form">User form</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default memo(Header);
