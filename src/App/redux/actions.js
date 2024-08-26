import AviasalesService from "../../services/AviasalesService";

export const DISABLE_LOADING = "DISABLE_LOADING";
export const LOAD_ALL_TICKETS = "LOAD_ALL_TICKETS";
export const LOAD_TICKETS_REQUESTED = "LOAD_TICKETS_REQUESTED";
export const LOAD_TICKETS_SUCCESS = "LOAD_TICKETS_SUCCESS";
export const LOAD_TICKETS = "LOAD_TICKETS";
export const LOAD_FILTRED_TICKETS = "LOAD_FILTRED_TICKETS";
export const LOAD_MORE_TICKETS = "LOAD_MORE_TICKETS";
export const GET_ERROR = "GET_ERROR";

export const FILTER_ALL = "FILTER_ALL";
export const FILTER_TRANSFER = "FILTER_TRANSFER";
export const ZERO_TRANSFERS = "0_TRANSFERS";
export const ONE_TRANSFER = "1_TRANSFER";
export const TWO_TRANSFERS = "2_TRANSFERS";
export const THREE_TRANSFERS = "3_TRANSFERS";

export const FILTER_CHEAPEST = "FILTER_CHEAPEST";
export const FILTER_FASTEST = "FILTER_FASTEST";
export const FILTER_OPTIMAL = "FILTER_OPTIMAL";

export function disableLoading() {
  return { type: DISABLE_LOADING };
}

export function loadTicketsRequested() {
  return { type: LOAD_TICKETS_REQUESTED };
}

export function loadTicketsSuccess(
  ticketList = [],
  originTickets = [],
  filtredTickets = []
) {
  return { type: LOAD_TICKETS_SUCCESS, ticketList, originTickets, filtredTickets };
}

export function loadAllTickets(originTickets = [], filtredTickets = []) {
  return { type: LOAD_ALL_TICKETS, originTickets, filtredTickets };
}

export function loadAsyncTickets() {
  const service = new AviasalesService();
  return (dispatch) => {
    dispatch(loadTicketsRequested());

    service
      .getSearchID()
      .then((response) => {
        const searchID = response.searchId;

        service
          .getPacketOfTickets(searchID)
          .then((result) => {
            const originTickets = result.tickets;

            const ticketList = originTickets.slice(0, 5);

            dispatch(loadTicketsSuccess(ticketList, originTickets, originTickets));

            return ticketList;
          })
          .catch(() => {
            dispatch(catchError());

            return null;
          });

        const timer = setInterval(() => {
          service
            .getPacketOfTickets(searchID)
            .then((result) => {
              if (result.stop) {
                dispatch(disableLoading());
                clearInterval(timer);
              }
              dispatch(loadAllTickets(result.tickets, result.tickets));
            })
            .catch((error) => error);
        }, 400);

        return searchID;
      })
      .catch(() => {
        dispatch(catchError());

        return null;
      });
  };
}

export function loadTickets(ticketList = []) {
  return { type: LOAD_TICKETS, payload: { ticketList } };
}

export function loadFiltredTickets(filtredTickets = []) {
  return { type: LOAD_FILTRED_TICKETS, payload: { filtredTickets } };
}

export function loadMoreTickets(updatedTickets = []) {
  return { type: LOAD_MORE_TICKETS, payload: { updatedTickets } };
}

export function catchError() {
  return { type: GET_ERROR };
}

export function filterAll() {
  return { type: FILTER_ALL };
}

export function filterTransfers(checkboxID = "", event = {}) {
  return { type: FILTER_TRANSFER, payload: { [checkboxID]: event.target.checked } };
}

export function filterCheapest() {
  return { type: FILTER_CHEAPEST };
}

export function filterFastest() {
  return { type: FILTER_FASTEST };
}

export function filterOptimal() {
  return { type: FILTER_OPTIMAL };
}
