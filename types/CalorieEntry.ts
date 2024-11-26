export type CalorieEntry = {
  id: string;
  mealType: MealType;
  entryType: EntryType;
  calories: number;
  date: Date;
};

export type MealType = "breakfast" | "lunch" | "dinner" | "snack" | "other";
export type EntryType = "manual"; // TODO: We can add specific items later
