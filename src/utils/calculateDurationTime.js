import {
  differenceInHours,
  getYear,
  getMonth,
  getDate,
  getHours,
  getMinutes,
  format,
} from "date-fns";

export default function calculateDurationTime(
  startpoint = new Date(),
  endpoint = new Date()
) {
  const differenceHours = differenceInHours(endpoint, startpoint);

  const differenceMinutes = format(
    new Date(
      getYear(endpoint),
      getMonth(endpoint),
      getDate(endpoint),
      getHours(endpoint),
      getMinutes(endpoint)
    ) -
      new Date(
        getYear(startpoint),
        getMonth(startpoint),
        getDate(startpoint),
        getHours(startpoint),
        getMinutes(startpoint)
      ),
    "mm"
  );

  return `${differenceHours}ч ${differenceMinutes}м`;
}
