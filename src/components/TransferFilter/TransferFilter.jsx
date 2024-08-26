import { useDispatch, useSelector } from "react-redux";

import {
  filterAll,
  filterTransfers,
  loadFiltredTickets,
  loadTickets,
} from "../../App/redux/actions";

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

  const originTicketList = useSelector((state) => {
    return state.loadReducer.originTicketList;
  });

  const filtredTicketList = useSelector((state) => {
    return state.loadReducer.filtredTicketList;
  });

  const dispatch = useDispatch();

  const onChangeAll = () => {
    dispatch(filterAll());
    if (filterIsAll) {
      dispatch(loadTickets());
    } else {
      const ticketList = originTicketList.slice(0, 5);
      dispatch(loadFiltredTickets(originTicketList));
      dispatch(loadTickets(ticketList));
    }
  };

  const onChangeZero = () => {
    if (
      !filterIsAll &&
      !filterIsOneTransfer &&
      !filterIsTwoTransfers &&
      !filterIsThreeTransfers
    ) {
      dispatch(loadTickets());
    }

    if (
      !filterIsAll &&
      !filterIsOneTransfer &&
      !filterIsTwoTransfers &&
      !filterIsThreeTransfers &&
      !filterIsNoTransfers
    ) {
      const filtredTickets = filtredTicketList.filter(
        (ticket) =>
          ticket.segments[0].stops.length && ticket.segments[1].stops.length === 0
      );

      const ticketList = filtredTickets.slice(0, 5);

      dispatch(loadFiltredTickets(filtredTickets));
      dispatch(loadTickets(ticketList));
    }

    if (
      !filterIsAll &&
      filterIsOneTransfer &&
      filterIsTwoTransfers &&
      filterIsThreeTransfers
    ) {
      const ticketList = originTicketList.slice(0, 5);
      dispatch(loadFiltredTickets(originTicketList));
      dispatch(loadTickets(ticketList));
    }
  };

  const onChangeOne = () => {
    if (
      !filterIsAll &&
      !filterIsNoTransfers &&
      !filterIsTwoTransfers &&
      !filterIsThreeTransfers
    ) {
      dispatch(loadTickets());
      dispatch(loadFiltredTickets(originTicketList));
    }

    if (
      !filterIsAll &&
      !filterIsOneTransfer &&
      !filterIsTwoTransfers &&
      !filterIsThreeTransfers &&
      !filterIsNoTransfers
    ) {
      const filtredTickets = filtredTicketList.filter(
        (ticket) =>
          ticket.segments[0].stops.length && ticket.segments[1].stops.length === 1
      );

      const ticketList = filtredTickets.slice(0, 5);

      dispatch(loadFiltredTickets(filtredTickets));
      dispatch(loadTickets(ticketList));
    }

    if (
      !filterIsAll &&
      filterIsNoTransfers &&
      filterIsTwoTransfers &&
      filterIsThreeTransfers
    ) {
      const ticketList = originTicketList.slice(0, 5);
      dispatch(loadFiltredTickets(originTicketList));
      dispatch(loadTickets(ticketList));
    }
  };

  const onChangeTwo = () => {
    if (
      !filterIsAll &&
      !filterIsNoTransfers &&
      !filterIsOneTransfer &&
      !filterIsThreeTransfers
    ) {
      dispatch(loadTickets());
      dispatch(loadFiltredTickets(originTicketList));
    }

    if (
      !filterIsAll &&
      !filterIsOneTransfer &&
      !filterIsTwoTransfers &&
      !filterIsThreeTransfers &&
      !filterIsNoTransfers
    ) {
      const filtredTickets = filtredTicketList.filter(
        (ticket) =>
          ticket.segments[0].stops.length && ticket.segments[1].stops.length === 2
      );

      const ticketList = filtredTickets.slice(0, 5);

      dispatch(loadFiltredTickets(filtredTickets));
      dispatch(loadTickets(ticketList));
    }

    if (
      !filterIsAll &&
      filterIsNoTransfers &&
      filterIsOneTransfer &&
      filterIsThreeTransfers
    ) {
      const ticketList = originTicketList.slice(0, 5);
      dispatch(loadFiltredTickets(originTicketList));
      dispatch(loadTickets(ticketList));
    }
  };

  const onChangeThree = () => {
    if (
      !filterIsAll &&
      !filterIsNoTransfers &&
      !filterIsOneTransfer &&
      !filterIsTwoTransfers
    ) {
      dispatch(loadTickets());
      dispatch(loadFiltredTickets(originTicketList));
    }

    if (
      !filterIsAll &&
      !filterIsOneTransfer &&
      !filterIsTwoTransfers &&
      !filterIsThreeTransfers &&
      !filterIsNoTransfers
    ) {
      const filtredTickets = filtredTicketList.filter(
        (ticket) =>
          ticket.segments[0].stops.length && ticket.segments[1].stops.length === 3
      );

      const ticketList = filtredTickets.slice(0, 5);

      dispatch(loadFiltredTickets(filtredTickets));
      dispatch(loadTickets(ticketList));
    }

    if (
      !filterIsAll &&
      filterIsNoTransfers &&
      filterIsOneTransfer &&
      filterIsTwoTransfers
    ) {
      const ticketList = originTicketList.slice(0, 5);
      dispatch(loadFiltredTickets(originTicketList));
      dispatch(loadTickets(ticketList));
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
            <span className={styles["TransferFilter-checkbox--illusion"]}></span>
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
              onChangeCapture={onChangeZero}
              checked={filterIsNoTransfers}
            />
            <span className={styles["TransferFilter-checkbox--illusion"]}></span>
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
              onChangeCapture={onChangeOne}
              checked={filterIsOneTransfer}
            />
            <span className={styles["TransferFilter-checkbox--illusion"]}></span>
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
              onChangeCapture={onChangeTwo}
              checked={filterIsTwoTransfers}
            />
            <span className={styles["TransferFilter-checkbox--illusion"]}></span>
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
              onChangeCapture={onChangeThree}
              checked={filterIsThreeTransfers}
            />
            <span className={styles["TransferFilter-checkbox--illusion"]}></span>
            <span>3 пересадки</span>
          </label>
        </li>
      </ul>
    </div>
  );
}
