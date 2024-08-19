export default function renderStopsCount(stops = []) {
  let stopsMessage = "";

  if (stops.length > 1) stopsMessage = `${stops.length} пересадки`;
  if (stops.length === 1) stopsMessage = `${stops.length} пересадка`;
  if (stops.length === 0) stopsMessage = "Без пересадок";

  return stopsMessage;
}
