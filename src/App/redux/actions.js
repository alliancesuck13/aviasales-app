export const LOAD_SEARCH_ID = "LOAD_SEARCH_ID";
export const LOAD_TICKETS = "LOAD_TICKETS";
export const LOAD_FILTRED_TICKETS = "LOAD_FILTRED_TICKETS";
export const GET_ERROR = "GET_ERROR";

export const FILTER_ALL = "FILTER_ALL";
export const FILTER_TRANSFER = "FILTER_TRANSFER";
export const ZERO_TRANSFERS = "0_TRANSFERS";
export const ONE_TRANSFER = "1_TRANSFER";
export const TWO_TRANSFERS = "2_TRANSFERS";
export const THREE_TRANSFERS = "3_TRANSFERS";

export function loadSearchID(searchID = "") {
  return { type: LOAD_SEARCH_ID, payload: { searchID } };
}

export function loadTickets(ticketList = []) {
  return { type: LOAD_TICKETS, payload: { ticketList } };
}

export function loadFiltredTickets(filtredTickets = []) {
  return { type: LOAD_FILTRED_TICKETS, payload: { filtredTickets } };
}

export function catchError(hasError = false) {
  return { type: GET_ERROR, payload: { hasError } };
}

export function filterAll() {
  return { type: FILTER_ALL };
}

export function filterTransfers(checkboxID = "", event = {}) {
  return { type: FILTER_TRANSFER, payload: { [checkboxID]: event.target.checked } };
}
