import { format } from "date-fns";
import { ka } from "date-fns/locale";

function formatDateToGeorgian(dateTime) {
  const formattedDate = format(dateTime, "MMMM d, y", { locale: ka });
  return formattedDate;
}
export default formatDateToGeorgian;
