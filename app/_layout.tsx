import { Stack } from "expo-router";
import "../global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PaperProvider } from "react-native-paper";
import { theme } from "../lib/react-native-paper/theme";
import { useAppTheme } from "@/hooks/useAppTheme";

export default function RootLayout() {
  const { theme: appTheme, colorScheme } = useAppTheme();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={appTheme}>
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
          <Stack.Screen name="settings/index" options={{ title: "Settings" }} />
          <Stack.Screen
            name="settings/Profile"
            options={{ title: "Profile" }}
          />
          <Stack.Screen name="settings/Theme" options={{ title: "Theme" }} />
        </Stack>
      </PaperProvider>
    </QueryClientProvider>
  );
}
