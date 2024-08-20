import { useDispatch, useSelector } from "react-redux";

import styles from "./TransferFilter.module.scss";

export default function TransferFilter() {
  const filterIsAll = useSelector((state) => {
    return state.filterIsAll;
  });
  const filterIsNoTransfers = useSelector((state) => {
    return state.filterIsNoTransfers;
  });
  const filterIsOneTransfer = useSelector((state) => {
    return state.filterIsOneTransfer;
  });
  const filterIsTwoTransfers = useSelector((state) => {
    return state.filterIsTwoTransfers;
  });
  const filterIsThreeTransfers = useSelector((state) => {
    return state.filterIsThreeTransfers;
  });

  const dispatch = useDispatch();

  const onChangeAll = () => {
    dispatch({ type: "FILTER_ALL" });
  };

  const onChangeTransfers = (e) => {
    const checkboxID = e.target.id;
    dispatch({ type: "FILTER_TRANSFER", payload: { [checkboxID]: e.target.checked } });
  };

  return (
    <div className={styles.TransferFilter}>
      <h2 className={styles["TransferFilter-header"]}>Количество пересадок</h2>
      <ul>
        <li className={styles["TransferFilter-item"]}>
          <label className={styles["TransferFilter-label"]}>
            <input
              className={styles["TransferFilter-checkbox"]}
              type="checkbox"
              onChange={onChangeAll}
              checked={filterIsAll}
            />
            <span>Все</span>
          </label>
        </li>
        <li className={styles["TransferFilter-item"]}>
          <label className={styles["TransferFilter-label"]}>
            <input
              id="0_TRANSFERS"
              className={styles["TransferFilter-checkbox"]}
              type="checkbox"
              onChange={onChangeTransfers}
              checked={filterIsNoTransfers}
            />
            <span>Без пересадок</span>
          </label>
        </li>
        <li className={styles["TransferFilter-item"]}>
          <label className={styles["TransferFilter-label"]}>
            <input
              id="1_TRANSFER"
              className={styles["TransferFilter-checkbox"]}
              type="checkbox"
              onChange={onChangeTransfers}
              checked={filterIsOneTransfer}
            />
            <span>1 пересадка</span>
          </label>
        </li>
        <li className={styles["TransferFilter-item"]}>
          <label className={styles["TransferFilter-label"]}>
            <input
              id="2_TRANSFERS"
              className={styles["TransferFilter-checkbox"]}
              type="checkbox"
              onChange={onChangeTransfers}
              checked={filterIsTwoTransfers}
            />
            <span>2 пересадки</span>
          </label>
        </li>
        <li className={styles["TransferFilter-item"]}>
          <label className={styles["TransferFilter-label"]}>
            <input
              id="3_TRANSFERS"
              className={styles["TransferFilter-checkbox"]}
              type="checkbox"
              onChange={onChangeTransfers}
              checked={filterIsThreeTransfers}
            />
            <span>3 пересадки</span>
          </label>
        </li>
      </ul>
    </div>
  );
}
