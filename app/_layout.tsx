import { Stack } from "expo-router";
import "../global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
  useTheme,
} from "react-native-paper";
import { theme } from "../lib/react-native-paper/theme";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const queryClient = new QueryClient();
  const colorTheme = useTheme();

  const paperTheme =
    colorScheme === "dark"
      ? { ...MD3DarkTheme, colors: theme.dark, roundness: 4 }
      : { ...MD3LightTheme, colors: theme.light, roundness: 4 };

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={paperTheme}>
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor:
                colorScheme === "dark"
                  ? theme.dark.background
                  : theme.light.background,
            },
            headerTintColor:
              colorScheme === "dark"
                ? theme.dark.onBackground
                : theme.light.onBackground,
          }}
        >
          <Stack.Screen
            name="index"
            options={{ headerShown: false, title: "Home" }}
          />
          <Stack.Screen name="History" />
          <Stack.Screen name="Settings" />
        </Stack>
      </PaperProvider>
    </QueryClientProvider>
  );
}
