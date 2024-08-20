/* eslint-disable indent */
import { legacy_createStore as createStore } from "redux";

const initialState = {
  searchID: "",
  ticketList: [],
  filtredTicketList: [],
  filterIsAll: true,
  filterIsNoTransfers: true,
  filterIsOneTransfer: true,
  filterIsTwoTransfers: true,
  filterIsThreeTransfers: true,
  priceFilter: "CHEAP", // CHEAP, FAST, OPTIMAL
  isLoading: false,
  hasError: false,
};

const reducer = (state = initialState, action = undefined) => {
  switch (action.type) {
    case "LOAD_SEARCH_ID": // загрузка айди поиска
      return { ...state, searchID: action.payload.searchID };

    case "LOAD_TICKETS": // загрузка тикетов
      return { ...state, ticketList: action.payload.ticketList };

    case "LOAD_FILTRED_TICKETS": // отображение только 5 отфильтрованных тикетов
      return { ...state, filtredTicketList: action.payload.filtredTickets };

    case "FILTER_ALL": // все тикеты
      if (state.filterIsAll) {
        return {
          ...state,
          filterIsAll: !state.filterIsAll,
          filterIsNoTransfers: false,
          filterIsOneTransfer: false,
          filterIsTwoTransfers: false,
          filterIsThreeTransfers: false,
        };
      }
      return {
        ...state,
        filterIsAll: !state.filterIsAll,
        filterIsNoTransfers: true,
        filterIsOneTransfer: true,
        filterIsTwoTransfers: true,
        filterIsThreeTransfers: true,
      };

    case "FILTER_TRANSFER": // тикеты в зависимости от фильтров
      switch (Object.keys(action.payload)[0]) {
        case "0_TRANSFERS": // без пересадок
          if (
            !state.filterIsNoTransfers &&
            !state.filterIsAll &&
            state.filterIsOneTransfer &&
            state.filterIsTwoTransfers &&
            state.filterIsThreeTransfers
          ) {
            return { ...state, filterIsAll: true, filterIsNoTransfers: true };
          }

          return {
            ...state,
            filterIsAll: false,
            filterIsNoTransfers: !state.filterIsNoTransfers,
          };

        case "1_TRANSFER": // 1 пересадка
          if (
            !state.filterIsOneTransfer &&
            !state.filterIsAll &&
            state.filterIsNoTransfers &&
            state.filterIsTwoTransfers &&
            state.filterIsThreeTransfers
          ) {
            return { ...state, filterIsAll: true, filterIsOneTransfer: true };
          }

          return {
            ...state,
            filterIsAll: false,
            filterIsOneTransfer: !state.filterIsOneTransfer,
          };

        case "2_TRANSFERS": // 2 пересадки
          if (
            !state.filterIsTwoTransfers &&
            !state.filterIsAll &&
            state.filterIsNoTransfers &&
            state.filterIsOneTransfer &&
            state.filterIsThreeTransfers
          ) {
            return { ...state, filterIsAll: true, filterIsTwoTransfers: true };
          }

          return {
            ...state,
            filterIsAll: false,
            filterIsTwoTransfers: !state.filterIsTwoTransfers,
          };

        case "3_TRANSFERS": // 3 пересадки
          if (
            !state.filterIsThreeTransfers &&
            !state.filterIsAll &&
            state.filterIsNoTransfers &&
            state.filterIsOneTransfer &&
            state.filterIsTwoTransfers
          ) {
            return { ...state, filterIsAll: true, filterIsThreeTransfers: true };
          }

          return {
            ...state,
            filterIsAll: false,
            filterIsThreeTransfers: !state.filterIsThreeTransfers,
          };

        default:
          return { ...state };
      }
    case "GET_ERROR": // ошибка загрузки
      return { ...state, hasError: action.payload.hasError };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
