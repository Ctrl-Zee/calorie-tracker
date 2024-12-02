import { CalorieEntry, MealType } from "./CalorieEntry";

export type HistorySummary = {
  date: Date;
  totalCalories: number;
  dailyPercentage: number;
  items: HistoryItem[];
};

export type HistoryItem = {
  mealType: MealType;
  calories: number;
  entries: CalorieEntry[];
};
