import Ticket from "../Ticket";

import styles from "./TicketList.module.scss";

export default function TicketList() {
  const array = [1, 2, 3, 4, 5];

  // const tickets = array.map((ticket) => {})

  return (
    <>
      <ul>
        <li className={styles["TicketList-item"]}>
          <Ticket />
        </li>
        <li className={styles["TicketList-item"]}>
          <Ticket />
        </li>
        <li className={styles["TicketList-item"]}>
          <Ticket />
        </li>
        <li className={styles["TicketList-item"]}>
          <Ticket />
        </li>
        <li className={styles["TicketList-item"]}>
          <Ticket />
        </li>
      </ul>
      <button className={styles["TicketList-button"]} type="button">
        Показать еще 5 билетов
      </button>
    </>
  );
}
