/* eslint-disable indent */
import { useDispatch, useSelector } from "react-redux";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ThreeDots } from "react-loader-spinner";

import Error from "../Error";
import Ticket from "../Ticket";
import generateUniqueID from "../../utils/generateUniqueID";
import { loadMoreTickets } from "../../App/redux/actions";

import styles from "./TicketList.module.scss";

export default function TicketList() {
  const allTickets = useSelector((state) => {
    return state.loadReducer.filtredTicketList;
  });

  let ticketList = useSelector((state) => {
    return state.loadReducer.ticketList;
  });

  const isLoading = useSelector((state) => {
    return state.loadReducer.isLoading;
  });

  const hasConnectionError = useSelector((state) => {
    return state.loadReducer.hasError;
  });

  const priceFilter = useSelector((state) => {
    return state.filterReducer.priceFilter;
  });

  const dispatch = useDispatch();

  switch (priceFilter) {
    case "CHEAP":
      ticketList = ticketList.sort((a, b) => a.price - b.price);

      break;

    case "FAST":
      ticketList = ticketList.sort(
        (a, b) => a.segments[0].duration - b.segments[0].duration
      );
      ticketList = ticketList.sort(
        (a, b) => a.segments[1].duration - b.segments[1].duration
      );

      break;

    case "OPTIMAL":
      ticketList = ticketList.sort((a, b) => a.price - b.price);
      ticketList = ticketList.sort(
        (a, b) => a.segments[0].duration - b.segments[0].duration
      );
      ticketList = ticketList.sort(
        (a, b) => a.segments[1].duration - b.segments[1].duration
      );

      break;

    default:
      break;
  }

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

  const loadTickets = () => {
    const indexOfLastTicket = ticketList.length;
    let updatedTickets = allTickets.slice(indexOfLastTicket, indexOfLastTicket + 5);
    updatedTickets = [...ticketList, ...updatedTickets];

    dispatch(loadMoreTickets(updatedTickets));
  };

  return (
    <>
      {isLoading && (
        <ThreeDots
          visible
          height="70"
          width="70"
          color="#2196f3"
          radius="1"
          ariaLabel="three-dots-loading"
          wrapperStyle={{
            display: "inline-block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      )}
      <ul>{!hasConnectionError && tickets}</ul>
      <Error hasConnectionError={hasConnectionError} ticketList={tickets}>
        {ticketList.length === allTickets.length ? null : (
          <button
            className={styles["TicketList-button"]}
            type="button"
            onClick={loadTickets}
          >
            Показать еще 5 билетов
          </button>
        )}
      </Error>
    </>
  );
}
