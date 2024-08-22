/* eslint-disable indent */
import { useDispatch, useSelector } from "react-redux";

import { filterCheapest, filterFastest, filterOptimal } from "../../App/redux/actions";

import styles from "./PriceFilter.module.scss";

export default function PriceFilter() {
  const priceFilter = useSelector((state) => {
    return state.filterReducer.priceFilter;
  });

  const dispatch = useDispatch();

  let styleRoundedButton1 = `${styles["PriceFilter-button"]} ${styles["PriceFilter-half-rounded-first"]}`;
  let styleButton = `${styles["PriceFilter-button"]}`;
  let styleRoundedButton2 = `${styles["PriceFilter-button"]} ${styles["PriceFilter-half-rounded-last"]}`;

  switch (priceFilter) {
    case "CHEAP":
      styleRoundedButton1 = `${styles["PriceFilter-button"]} ${styles["PriceFilter-half-rounded-first"]} ${styles["PriceFilter-selected"]}`;
      break;

    case "FAST":
      styleButton = `${styles["PriceFilter-button"]} ${styles["PriceFilter-selected"]}`;
      break;

    case "OPTIMAL":
      styleRoundedButton2 = `${styles["PriceFilter-button"]} ${styles["PriceFilter-half-rounded-last"]} ${styles["PriceFilter-selected"]}`;
      break;

    default:
      break;
  }

  const showCheapest = () => {
    dispatch(filterCheapest());
  };

  const showFastest = () => {
    dispatch(filterFastest());
  };

  const showOptimal = () => {
    dispatch(filterOptimal());
  };

  return (
    <ul className={styles.PriceFilter}>
      <li>
        <button type="button" className={styleRoundedButton1} onClick={showCheapest}>
          Самый дешевый
        </button>
      </li>
      <li>
        <button type="button" className={styleButton} onClick={showFastest}>
          Самый быстрый
        </button>
      </li>
      <li>
        <button type="button" className={styleRoundedButton2} onClick={showOptimal}>
          Оптимальный
        </button>
      </li>
    </ul>
  );
}
