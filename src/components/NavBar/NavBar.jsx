import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./NavBar.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
const NavBar = () => {
  return (
    <>
      <nav>
        <a href="/">NavBar</a>
        <div>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/catalog" className={buildLinkClass}>
            Catalog
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
