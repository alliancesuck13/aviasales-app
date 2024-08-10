import img from "../../assets/img/S7Logo.png";

import styles from "./Ticket.module.scss";

export default function Ticket() {
  return (
    <article className={styles.Ticket}>
      <div className={styles["Ticket-img-wrapper"]}>
        <img src={img} alt="Airline logo" />
      </div>
      <div className={styles["Ticket-info"]}>
        <table className={styles["Ticket-table"]}>
          <caption className={styles["Ticket-price"]}>13 400 P</caption>
          <thead>
            <tr>
              <th>MOW - HKT</th>
              <th>В пути</th>
              <th>2 пересадки</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10:45 - 8:00</td>
              <td>21ч 15м</td>
              <td>HKG, JNB</td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th>MOW - HKT</th>
              <th>В пути</th>
              <th>1 пересадка</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>11:20 - 00:50</td>
              <td>13ч 30м</td>
              <td>HKG</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  );
}
