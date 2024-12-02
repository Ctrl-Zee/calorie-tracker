import { format, isToday, isTomorrow, isYesterday } from "date-fns";

export const RealtiveDateFormatter = (date: Date) => {
  if (isToday(date)) {
    return "Today";
  }

  if (isYesterday(date)) {
    return "Yesterday";
  }

  if (isTomorrow(date)) {
    return "Tomorrow";
  }

  return format(date, "MMM d, yyyy");
};
