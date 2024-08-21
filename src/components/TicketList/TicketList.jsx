import { useSelector } from "react-redux";

import Ticket from "../Ticket";
import ProblemMessage from "../ProblemMessage";
import generateUniqueID from "../../utils/generateUniqueID";

import styles from "./TicketList.module.scss";

export default function TicketList() {
  const ticketList = useSelector((state) => {
    return state.loadReducer.filtredTicketList;
  });

  const hasConnectionError = useSelector((state) => {
    return state.loadReducer.hasError;
  });

  const tickets = ticketList.map((ticket) => {
    const firstSegment = ticket.segments[0];
    const secondsSegment = ticket.segments[1];

    return (
      <li key={generateUniqueID()} className={styles["TicketList-item"]}>
        <Ticket
          price={ticket.price}
          firstSegment={firstSegment}
          secondSegment={secondsSegment}
          carrier={ticket.carrier}
        />
      </li>
    );
  });

  const errorMessage = hasConnectionError ? (
    <ProblemMessage type="connection" message="Ошибка при получении данных от сервера" />
  ) : (
    <ProblemMessage message="Подходящих билетов не найдено" />
  );

  return (
    <>
      <ul>{tickets}</ul>
      {ticketList.length ? (
        <button className={styles["TicketList-button"]} type="button">
          Показать еще 5 билетов
        </button>
      ) : (
        errorMessage
      )}
    </>
  );
}
