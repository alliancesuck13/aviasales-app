/* eslint-disable indent */
import {
  LOAD_ALL_TICKETS,
  LOAD_TICKETS_REQUESTED,
  LOAD_TICKETS_SUCCESS,
  GET_ERROR,
  LOAD_MORE_TICKETS,
  LOAD_TICKETS,
  LOAD_FILTRED_TICKETS,
  DISABLE_LOADING,
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
    case LOAD_TICKETS_REQUESTED:
      return { ...state, isLoading: true };

    case DISABLE_LOADING:
      return { ...state, isLoading: false };

    case LOAD_ALL_TICKETS:
      return {
        ...state,
        originTicketList: [...state.originTicketList, ...action.originTickets],
        filtredTicketList: [...state.filtredTicketList, ...action.filtredTickets],
      };
    case LOAD_TICKETS_SUCCESS:
      return {
        ...state,
        ticketList: action.ticketList,
        originTicketList: action.originTickets,
        filtredTicketList: action.filtredTickets,
      };

    case LOAD_TICKETS:
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
