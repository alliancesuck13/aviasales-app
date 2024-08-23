/* eslint-disable indent */
/* eslint-disable prefer-destructuring */
import { FILTER_TRANSFER, loadFiltredTickets, loadTickets } from "../actions";

const ticketFilterMiddleware =
  ({ getState, dispatch }) =>
  (next) =>
  // eslint-disable-next-line consistent-return
  (action) => {
    if (action.type === FILTER_TRANSFER) {
      next(action);

      const state = getState();
      const filterState = state.filterReducer;
      const originTicketList = state.loadReducer.originTicketList;

      let filteredTickets = originTicketList;

      // Если активен хотя бы один фильтр по пересадкам
      if (
        filterState.filterIsNoTransfers ||
        filterState.filterIsOneTransfer ||
        filterState.filterIsTwoTransfers ||
        filterState.filterIsThreeTransfers
      ) {
        filteredTickets = originTicketList.filter((ticket) => {
          const stops0 = ticket.segments[0].stops.length;
          const stops1 = ticket.segments[1].stops.length;

          return (
            (filterState.filterIsNoTransfers && stops0 === 0 && stops1 === 0) ||
            (filterState.filterIsOneTransfer && stops0 === 1 && stops1 === 1) ||
            (filterState.filterIsTwoTransfers && stops0 === 2 && stops1 === 2) ||
            (filterState.filterIsThreeTransfers && stops0 === 3 && stops1 === 3)
          );
        });
      }

      // Если ни один фильтр не активен
      if (
        !filterState.filterIsNoTransfers &&
        !filterState.filterIsOneTransfer &&
        !filterState.filterIsTwoTransfers &&
        !filterState.filterIsThreeTransfers
      ) {
        filteredTickets = [];
      }

      dispatch(loadFiltredTickets(filteredTickets));
      dispatch(loadTickets(filteredTickets.slice(0, 5)));
    } else {
      return next(action);
    }
  };

export default ticketFilterMiddleware;
