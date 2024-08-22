import { useDispatch, useSelector } from "react-redux";

import { filterAll, filterTransfers, loadFiltredTickets } from "../../App/redux/actions";

import styles from "./TransferFilter.module.scss";

export default function TransferFilter() {
  const filterIsAll = useSelector((state) => {
    return state.filterReducer.filterIsAll;
  });

  const filterIsNoTransfers = useSelector((state) => {
    return state.filterReducer.filterIsNoTransfers;
  });

  const filterIsOneTransfer = useSelector((state) => {
    return state.filterReducer.filterIsOneTransfer;
  });

  const filterIsTwoTransfers = useSelector((state) => {
    return state.filterReducer.filterIsTwoTransfers;
  });

  const filterIsThreeTransfers = useSelector((state) => {
    return state.filterReducer.filterIsThreeTransfers;
  });

  const ticketList = useSelector((state) => {
    return state.loadReducer.ticketList;
  });

  const dispatch = useDispatch();

  const onChangeAll = () => {
    dispatch(filterAll());
    if (filterIsAll) {
      dispatch(loadFiltredTickets());
    } else {
      const filtredTickets = ticketList.slice(0, 5);
      dispatch(loadFiltredTickets(filtredTickets));
    }
  };

  const onChangeTransfers = (e) => {
    const checkboxID = e.target.id;
    dispatch(filterTransfers(checkboxID, e));
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
