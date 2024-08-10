import styles from "./PriceFilter.module.scss";

export default function PriceFilter() {
  return (
    <ul className={styles.PriceFilter}>
      <li>
        <button
          type="button"
          className={`${styles["PriceFilter-button"]} 
            ${styles["PriceFilter-half-rounded-first"]} 
            ${styles["PriceFilter-selected"]}`}
        >
          Самый дешевый
        </button>
      </li>
      <li>
        <button type="button" className={styles["PriceFilter-button"]}>
          Самый быстрый
        </button>
      </li>
      <li>
        <button
          type="button"
          className={`${styles["PriceFilter-button"]} ${styles["PriceFilter-half-rounded-last"]}`}
        >
          Оптимальный
        </button>
      </li>
    </ul>
  );
}
