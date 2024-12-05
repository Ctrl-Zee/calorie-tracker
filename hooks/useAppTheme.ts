import { theme } from "@/lib/react-native-paper/theme";
import { useColorScheme } from "react-native";
import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";

export const useAppTheme = () => {
  const colorScheme = useColorScheme();

  const paperTheme =
    colorScheme === "dark"
      ? { ...MD3DarkTheme, colors: theme.dark, roundness: 4 }
      : { ...MD3LightTheme, colors: theme.light, roundness: 4 };

  return { theme: paperTheme, colorScheme };
};
