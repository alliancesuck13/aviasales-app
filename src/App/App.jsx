import { useEffect } from "react";
import { useDispatch } from "react-redux";

import TicketList from "../components/TicketList";
import PriceFilter from "../components/PriceFilter";
import TransferFilter from "../components/TransferFilter";

import styles from "./App.module.scss";
import { loadAsyncTickets } from "./redux/actions";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAsyncTickets());
  }, [dispatch]);

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
