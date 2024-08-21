import { useDispatch } from "react-redux";

import AviasalesService from "../services/AviasalesService";
import TicketList from "../components/TicketList";
import PriceFilter from "../components/PriceFilter";
import TransferFilter from "../components/TransferFilter";

import {
  loadSearchID,
  loadTickets,
  loadFiltredTickets,
  catchError,
} from "./redux/actions";
import styles from "./App.module.scss";

export default function App() {
  const service = new AviasalesService();
  const dispatch = useDispatch();

  window.onload = () => {
    service
      .getSearchID()
      .then((response) => {
        const searchID = response.searchId;

        service
          .getTickets(searchID)
          .then((tickets) => {
            const ticketList = tickets;

            const filtredTickets = ticketList.slice(0, 5);

            dispatch(loadTickets(ticketList));
            dispatch(loadFiltredTickets(filtredTickets));
            return ticketList;
          })
          .catch(() => {
            const hasError = true;
            dispatch(catchError(hasError));
            return hasError;
          });

        dispatch(loadSearchID(searchID));
        return searchID;
      })
      .catch(() => {
        const hasError = true;
        dispatch(catchError(hasError));
        return hasError;
      });
  };

  return (
    <div className={styles.App}>
      <header>
        <img
          className={styles["App-logo"]}
          src="/Logo.svg"
          alt="Aviasales logo"
          width={60}
        />
        <h1 className={styles["App-hidden"]}>Aviasales App</h1>
      </header>

      <main className={styles["App-main"]}>
        <TransferFilter />
        <div className={styles["App-wrapper"]}>
          <PriceFilter />
          <TicketList />
        </div>
      </main>
    </div>
  );
}
