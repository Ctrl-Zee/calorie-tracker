import { useMemo } from "react";
import { useGetEntries } from "./useGetEntries";
import { isSameDay } from "date-fns";
import { MealType } from "@/types/CalorieEntry";
import { HistoryItem, HistorySummary } from "@/types/HistorySummary";
import { DEFAULT_DAILY_GOAL } from "@/types/Constants";

export const useGetHistoryByDate = (date: Date) => {
  const { data: entries } = useGetEntries();

  const filteredEntries = entries?.filter((entry) =>
    isSameDay(new Date(entry.date), date),
  );

  const historyDetail = useMemo(() => {
    if (!filteredEntries) return null;

    const mealTypes: MealType[] = [
      "breakfast",
      "lunch",
      "dinner",
      "snack",
      "other",
    ];

    const items = mealTypes.map((mealType): HistoryItem => {
      const mealEntries = filteredEntries.filter(
        (entry) => entry.mealType === mealType,
      );

      return {
        mealType: mealType,
        calories: mealEntries.reduce((sum, entry) => sum + entry.calories, 0),
        entries: mealEntries,
      };
    });

    const totalCalories = items.reduce((sum, item) => sum + item.calories, 0);

    return {
      date,
      totalCalories,
      dailyPercentage: Math.round((totalCalories / DEFAULT_DAILY_GOAL) * 100),
      items,
    } as HistorySummary;
  }, [filteredEntries]);

  return { data: historyDetail };
};
