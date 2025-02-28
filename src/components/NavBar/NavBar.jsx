import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./NavBar.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.item, isActive && css.active);
};
const NavBar = () => {
  return (
    <>
      <nav className={css.navBar}>
        <a href="/" className={css.logo}>
          Rental<span className={css.logoSpan}>Car</span>
        </a>
        <div className={css.links}>
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
