import { MealType } from "@/types/CalorieEntry";
import {
  endOfDay,
  setHours,
  setMinutes,
  startOfDay,
  isBefore,
  isAfter,
} from "date-fns";

const getBreakfastStartTime = () => {
  return startOfDay(new Date());
};

// Get today's date at 11:59 AM
const getBreakfastEndTime = () => {
  const today = startOfDay(new Date());
  return setHours(today, 11);
};

const getLunchStartTime = () => {
  const today = startOfDay(new Date());
  return setMinutes(setHours(today, 11), 1);
};

const getLunchEndTime = () => {
  const today = startOfDay(new Date());
  return setHours(today, 16);
};

const getDinnerStartTime = () => {
  const today = startOfDay(new Date());
  return setMinutes(setHours(today, 16), 1);
};

const getDinnerEndTime = () => {
  return endOfDay(new Date());
};

export const getMealByTime = (): MealType => {
  const now = new Date();

  if (
    isAfter(now, getBreakfastStartTime()) &&
    isBefore(now, getBreakfastEndTime())
  ) {
    return "breakfast";
  } else if (
    isAfter(now, getLunchStartTime()) &&
    isBefore(now, getLunchEndTime())
  ) {
    return "lunch";
  } else if (
    isAfter(now, getDinnerStartTime()) &&
    isBefore(now, getDinnerEndTime())
  ) {
    return "dinner";
  } else {
    return "snack";
  }
};
