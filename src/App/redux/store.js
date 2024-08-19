/* eslint-disable indent */
import { legacy_createStore as createStore } from "redux";

const initialState = {
  searchID: "",
  ticketList: [],
  filtredTicketList: [],
  transferFilter: "ALL", // ALL, 0_TRANSFERS, 1_TRANSFER, 2_TRANSFER, 3_TRANSFER
  priceFilter: "CHEAP", // CHEAP, FAST, OPTIMAL
  isLoading: false,
  hasError: false,
};

const reducer = (state = initialState, action = undefined) => {
  switch (action.type) {
    case "LOAD_TICKETS":
      return { ...state, ticketList: action.payload.ticketList };
    case "LOAD_FILTRED_TICKETS":
      console.log(action.payload.filtredTickets);
      return { ...state, filtredTicketList: action.payload.filtredTickets };
    case "LOAD_SEARCH_ID":
      return { ...state, searchID: action.payload.searchID };
    case "GET_ERROR":
      return { ...state, hasError: action.payload.hasError };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
