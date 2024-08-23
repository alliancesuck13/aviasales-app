/* eslint-disable indent */
import {
  LOAD_SEARCH_ID,
  LOAD_TICKETS,
  LOAD_ORIGIN_TICKETS,
  LOAD_FILTRED_TICKETS,
  GET_ERROR,
  LOAD_MORE_TICKETS,
  SET_LOADING,
} from "../actions";

const initialState = {
  searchID: "",
  originTicketList: [],
  filtredTicketList: [],
  ticketList: [],
  isLoading: false,
  hasError: false,
};

export default function loadReducer(state = initialState, action = undefined) {
  switch (action.type) {
    case LOAD_SEARCH_ID: // загрузка айди поиска
      return { ...state, searchID: action.payload.searchID };

    case LOAD_TICKETS: // отображение 5 тикетов
      return { ...state, ticketList: action.payload.ticketList };

    case LOAD_ORIGIN_TICKETS: // загрузка тикетов
      return { ...state, originTicketList: action.payload.originTickets };

    case LOAD_FILTRED_TICKETS: // фильтрация тикетов от originTickets
      return { ...state, filtredTicketList: action.payload.filtredTickets };

    case LOAD_MORE_TICKETS:
      return { ...state, ticketList: action.payload.updatedTickets };

    case SET_LOADING:
      return { ...state, isLoading: action.payload.isLoading };

    case GET_ERROR: // ошибка загрузки
      return { ...state, hasError: action.payload.hasError };

    default:
      return state;
  }
}
