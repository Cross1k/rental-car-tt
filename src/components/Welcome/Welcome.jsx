import { Link } from "react-router-dom";
import css from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={css.mainWrapper}>
      <h1 className={css.title}>Find your perfect rental car</h1>
      <p className={css.about}>
        Reliable and budget-friendly rentals for any journey
      </p>
      <Link to={"/catalog"}>
        <button className={css.catalogBtn} type="button">
          View Catalog
        </button>
      </Link>
    </div>
  );
};

export default Welcome;
