import ProblemMessage from "../ProblemMessage";

export default function Error({ hasConnectionError = false, ticketList = [], children }) {
  // const errorMessage = hasConnectionError ? (
  //   <ProblemMessage type="connection" message="Ошибка при получении данных от сервера" />
  // ) : !ticketList.length ? (
  //   <ProblemMessage message="Подходящих билетов не найдено" />
  // ) : null;

  let errorMessage = null;

  if (hasConnectionError)
    errorMessage = (
      <ProblemMessage
        type="connection"
        message="Ошибка при получении данных от сервера"
      />
    );

  if (!hasConnectionError && !ticketList.length)
    errorMessage = <ProblemMessage message="Подходящих билетов не найдено" />;

  return errorMessage === null ? children : errorMessage;
}
