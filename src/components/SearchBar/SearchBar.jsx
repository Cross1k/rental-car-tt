import css from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <form className={css.searchBarWrapper}>
      <p className={css.inputLabel}>Car brand</p>
      <select name="brands" className={css.input}>
        <option value="default" selected>
          Choose a brand
        </option>
      </select>
      <p className={css.inputLabel}>Price/ 1 hour</p>
      <select name="price" className={css.input}>
        <option value="default" selected>
          Choose a price
        </option>
      </select>
      <p className={css.inputLabel}>Car mileage / km</p>
      <input type="text" placeholder="From" className={(css.input, css.from)} />
      <input type="text" placeholder="To" className={(css.input, css.to)} />
      <button type="submit" className={css.submitBtn}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
