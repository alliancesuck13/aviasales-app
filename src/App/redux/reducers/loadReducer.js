/* eslint-disable indent */
import {
  LOAD_TICKETS_REQUESTED,
  LOAD_TICKETS_SUCCESS,
  GET_ERROR,
  LOAD_MORE_TICKETS,
  LOAD_TICKETS,
  LOAD_FILTRED_TICKETS,
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
    case LOAD_TICKETS_REQUESTED: // загрузка айди поиска
      return { ...state, isLoading: true };

    case LOAD_TICKETS_SUCCESS: // отображение 5 тикетов
      return {
        ...state,
        ticketList: action.ticketList,
        originTicketList: action.originTickets,
        filtredTicketList: action.filtredTickets,
        isLoading: false,
      };

    case LOAD_TICKETS: // отображение 5 тикетов
      return { ...state, ticketList: action.payload.ticketList };

    case LOAD_FILTRED_TICKETS: // фильтрация тикетов от originTickets
      return { ...state, filtredTicketList: action.payload.filtredTickets };

    case LOAD_MORE_TICKETS:
      return { ...state, ticketList: action.payload.updatedTickets };

    case GET_ERROR: // ошибка загрузки
      return { ...state, hasError: true, isLoading: false };

    default:
      return state;
  }
}
