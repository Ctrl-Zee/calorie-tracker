import { Settings } from "@/types/Settings";
import AsyncStorage from "@react-native-async-storage/async-storage";

const defaultSettings: Settings = {
  profile: {
    dailyCalories: 2000,
  },
  theme: "automatic",
  isInitialized: true,
};

export const initSettings = async (): Promise<void> => {
  const settings = await AsyncStorage.getItem("userSettings");

  if (!settings || JSON.parse(settings).isInitialized === false) {
    console.log("Initializing settings");
    await AsyncStorage.setItem("userSettings", JSON.stringify(defaultSettings));
  }
};
