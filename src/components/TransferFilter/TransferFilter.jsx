import { useSelector } from "react-redux";

import styles from "./TransferFilter.module.scss";

export default function TransferFilter() {
  const transferFilter = useSelector((state) => {
    return state.transferFilter;
  });

  let isAllChecked = true;

  if (transferFilter === "ALL") {
    isAllChecked = true;
  } else {
    isAllChecked = false;
  }

  return (
    <div className={styles.TransferFilter}>
      <h2 className={styles["TransferFilter-header"]}>Количество пересадок</h2>
      <ul>
        <li className={styles["TransferFilter-item"]}>
          <label className={styles["TransferFilter-label"]}>
            <input
              className={styles["TransferFilter-checkbox"]}
              type="checkbox"
              defaultChecked={isAllChecked}
            />
            <span>Все</span>
          </label>
        </li>
        <li className={styles["TransferFilter-item"]}>
          <label className={styles["TransferFilter-label"]}>
            <input className={styles["TransferFilter-checkbox"]} type="checkbox" />
            <span>Без пересадок</span>
          </label>
        </li>
        <li className={styles["TransferFilter-item"]}>
          <label className={styles["TransferFilter-label"]}>
            <input className={styles["TransferFilter-checkbox"]} type="checkbox" />
            <span>1 пересадка</span>
          </label>
        </li>
        <li className={styles["TransferFilter-item"]}>
          <label className={styles["TransferFilter-label"]}>
            <input className={styles["TransferFilter-checkbox"]} type="checkbox" />
            <span>2 пересадки</span>
          </label>
        </li>
        <li className={styles["TransferFilter-item"]}>
          <label className={styles["TransferFilter-label"]}>
            <input className={styles["TransferFilter-checkbox"]} type="checkbox" />
            <span>3 пересадки</span>
          </label>
        </li>
      </ul>
    </div>
  );
}
