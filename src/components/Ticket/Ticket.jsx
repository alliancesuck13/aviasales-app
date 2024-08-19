import { addMinutes, format } from "date-fns";

import calculateDurationTime from "../../utils/calculateDurationTime";
import renderStopsCount from "../../utils/renderStopsCount";

import styles from "./Ticket.module.scss";

export default function Ticket({ price, firstSegment, secondSegment, carrier }) {
  const formatedTime1 = `${format(firstSegment.date, "hh:mm")} - ${format(addMinutes(new Date(firstSegment.date), firstSegment.duration), "hh:mm")}`;
  const formatedTime2 = `${format(secondSegment.date, "hh:mm")} - ${format(addMinutes(new Date(secondSegment.date), secondSegment.duration), "hh:mm")}`;

  const firstSegmentStartpoint = firstSegment.date;
  const firstSegmentEndpoint = addMinutes(
    new Date(firstSegment.date),
    firstSegment.duration
  );

  const secondSegmentStartpoint = secondSegment.date;
  const secondSegmentEndpoint = addMinutes(
    new Date(secondSegment.date),
    secondSegment.duration
  );

  const formatedHours1 = calculateDurationTime(
    firstSegmentStartpoint,
    firstSegmentEndpoint
  );
  const formatedHours2 = calculateDurationTime(
    secondSegmentStartpoint,
    secondSegmentEndpoint
  );

  const firstSegmentStops = renderStopsCount(firstSegment.stops);
  const secondSegmentStops = renderStopsCount(secondSegment.stops);

  let fth1 = {};
  let fth2 = {};
  let fth3 = {};

  let sth1 = {};
  let sth2 = {};
  let sth3 = {};

  if (firstSegmentStops === "Без пересадок") {
    fth1 = { transform: "translateX(3px)" };
    fth2 = { transform: "translateX(7px)" };
    fth3 = { transform: "translateX(12px)" };
  }

  if (secondSegmentStops === "Без пересадок") {
    sth1 = { transform: "translateX(3px)" };
    sth2 = { transform: "translateX(7px)" };
    sth3 = { transform: "translateX(12px)" };
  }

  return (
    <article className={styles.Ticket}>
      <div className={styles["Ticket-img-wrapper"]}>
        <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt="Airline logo" />
      </div>
      <div className={styles["Ticket-info"]}>
        <table className={styles["Ticket-table"]}>
          <caption className={styles["Ticket-price"]}>{price} P</caption>
          <thead>
            <tr>
              <th style={fth1}>
                {firstSegment.origin} - {firstSegment.destination}
              </th>
              <th style={fth2}>В пути</th>
              <th style={fth3}>{firstSegmentStops}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{formatedTime1}</td>
              <td>{formatedHours1}</td>
              <td>{firstSegment.stops.join(", ")}</td>
            </tr>
          </tbody>
        </table>
        <table className={styles["Ticket-table"]}>
          <caption className={styles["Ticket-price"]}>{price} P</caption>
          <thead>
            <tr>
              <th style={sth1}>
                {secondSegment.origin} - {secondSegment.destination}
              </th>
              <th style={sth2}>В пути</th>
              <th style={sth3}>{secondSegmentStops}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{formatedTime2}</td>
              <td>{formatedHours2}</td>
              <td>{secondSegment.stops.join(", ")}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  );
}
