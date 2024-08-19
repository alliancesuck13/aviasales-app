import styles from "./ProblemMessage.module.scss";

export default function ProblemMessage({ type, message }) {
  const messageClass =
    type === "connection"
      ? styles["ProblemMessage--connection"]
      : styles["ProblemMessage--info"];

  return (
    <div className={`${styles.ProblemMessage} ${messageClass}`}>
      <p className={styles["ProblemMessage-text"]}>{message}</p>
    </div>
  );
}
