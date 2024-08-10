import TicketList from "../TicketList";
import PriceFilter from "../PriceFilter";
import TransferFilter from "../TransferFilter";

import styles from "./App.module.scss";

export default function App() {
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
