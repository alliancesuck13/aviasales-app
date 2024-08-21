import {
  FILTER_ALL,
  FILTER_TRANSFER,
  ZERO_TRANSFERS,
  ONE_TRANSFER,
  TWO_TRANSFERS,
  THREE_TRANSFERS,
} from "../actions";

/* eslint-disable indent */
const initialState = {
  filterIsAll: true,
  filterIsNoTransfers: true,
  filterIsOneTransfer: true,
  filterIsTwoTransfers: true,
  filterIsThreeTransfers: true,
  priceFilter: "CHEAP", // CHEAP, FAST, OPTIMAL
};

export default function filterReducer(state = initialState, action = undefined) {
  switch (action.type) {
    case FILTER_ALL: // все тикеты
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

    case FILTER_TRANSFER: // тикеты в зависимости от фильтров
      switch (Object.keys(action.payload)[0]) {
        case ZERO_TRANSFERS: // без пересадок
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

        case ONE_TRANSFER: // 1 пересадка
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

        case TWO_TRANSFERS: // 2 пересадки
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

        case THREE_TRANSFERS: // 3 пересадки
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

    default:
      return state;
  }
}
