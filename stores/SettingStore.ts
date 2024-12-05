import { Settings } from "@/types/Settings";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORE_KEY = "settings";

export const setSettings = async (settings: Settings): Promise<void> => {
  const jsonValue = JSON.stringify(settings);
  await AsyncStorage.setItem(STORE_KEY, jsonValue);
};

export const getSettings = async (): Promise<Settings | null> => {
  const data = await AsyncStorage.getItem(STORE_KEY);
  if (data === null) return null;
  return JSON.parse(data);
};
