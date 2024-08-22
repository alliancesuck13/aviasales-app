import TicketList from "../components/TicketList";
import PriceFilter from "../components/PriceFilter";
import TransferFilter from "../components/TransferFilter";
import DataLoader from "../components/DataLoader";

import styles from "./App.module.scss";

export default function App() {
  return (
    <div className={styles.App}>
      <DataLoader />
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
