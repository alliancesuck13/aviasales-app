import {
  LOAD_SEARCH_ID,
  LOAD_TICKETS,
  LOAD_FILTRED_TICKETS,
  GET_ERROR,
} from "../actions";

/* eslint-disable indent */
const initialState = {
  searchID: "",
  ticketList: [],
  filtredTicketList: [],
  isLoading: false,
  hasError: false,
};

export default function loadReducer(state = initialState, action = undefined) {
  switch (action.type) {
    case LOAD_SEARCH_ID: // загрузка айди поиска
      return { ...state, searchID: action.payload.searchID };

    case LOAD_TICKETS: // загрузка тикетов
      return { ...state, ticketList: action.payload.ticketList };

    case LOAD_FILTRED_TICKETS: // отображение только 5 отфильтрованных тикетов
      return { ...state, filtredTicketList: action.payload.filtredTickets };

    case GET_ERROR: // ошибка загрузки
      return { ...state, hasError: action.payload.hasError };

    default:
      return state;
  }
}
