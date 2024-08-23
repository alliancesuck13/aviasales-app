import { useDispatch } from "react-redux";

import AviasalesService from "../../services/AviasalesService";
import {
  loadSearchID,
  loadTickets,
  loadOriginTickets,
  loadFiltredTickets,
  setLoading,
  catchError,
} from "../../App/redux/actions";

export default function DataLoader() {
  const service = new AviasalesService();
  const dispatch = useDispatch();

  window.onload = () => {
    dispatch(setLoading(true));
    service
      .getSearchID()
      .then((response) => {
        const searchID = response.searchId;

        service
          .getTickets(searchID)
          .then((tickets) => {
            const originTickets = tickets;

            const ticketList = originTickets.slice(0, 5);

            dispatch(loadTickets(ticketList));
            dispatch(loadOriginTickets(originTickets));
            dispatch(loadFiltredTickets(originTickets));
            dispatch(setLoading(false));
            return ticketList;
          })
          .catch(() => {
            const hasError = true;
            dispatch(catchError(hasError));
            dispatch(setLoading(false));

            return hasError;
          });

        dispatch(loadSearchID(searchID));
        return searchID;
      })
      .catch(() => {
        const hasError = true;
        dispatch(catchError(hasError));
        dispatch(setLoading(false));

        return hasError;
      });
  };
}
