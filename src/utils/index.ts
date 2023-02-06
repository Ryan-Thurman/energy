import { format } from "date-fns";

export function FormatDate(date: string) {
  return format(new Date(date), "MM/dd hb");
}
