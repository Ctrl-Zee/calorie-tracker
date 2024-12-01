import { Stack } from "expo-router";
import "../global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from "react-native-paper";
import { theme } from "../lib/react-native-paper/theme";
import { useColorScheme } from "react-native";
import History from "@/app/History";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const queryClient = new QueryClient();

  const paperTheme =
    colorScheme === "dark"
      ? { ...MD3DarkTheme, colors: theme.dark }
      : { ...MD3LightTheme, colors: theme.light };

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={paperTheme}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="History" />
        </Stack>
      </PaperProvider>
    </QueryClientProvider>
  );
}
