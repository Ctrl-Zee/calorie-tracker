import { CalorieEntry } from "@/types/CalorieEntry";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORE_KEY = "calories";

export const setEntry = async (ce: CalorieEntry): Promise<void> => {
  const entries = await getEntries();
  const newEntries = [...(entries || []), ce];
  const jsonValue = JSON.stringify(newEntries);
  await AsyncStorage.setItem(STORE_KEY, jsonValue);
};

export const getEntries = async (): Promise<CalorieEntry[] | null> => {
  const data = await AsyncStorage.getItem(STORE_KEY);
  if (data === null) return null;
  return JSON.parse(data);
};

export const getEntry = async (
  id: string,
): Promise<CalorieEntry | undefined> => {
  const entries = await getEntries();
  const todo = entries?.find((entry) => entry.id === id);
  return todo;
};

export const initTestEntries = async (): Promise<void> => {
  const entries = [
    {
      id: "1",
      mealType: "breakfast",
      entryType: "manual",
      calories: 300,
      date: new Date(),
    },
    {
      id: "2",
      mealType: "lunch",
      entryType: "manual",
      calories: 500,
      date: new Date(),
    },
    {
      id: "3",
      mealType: "dinner",
      entryType: "manual",
      calories: 700,
      date: new Date(),
    },
  ];
  const jsonValue = JSON.stringify(entries);
  await AsyncStorage.setItem(STORE_KEY, jsonValue);
};

export const removeAllEntries = async (): Promise<void> => {
  await AsyncStorage.setItem(STORE_KEY, "");
};
