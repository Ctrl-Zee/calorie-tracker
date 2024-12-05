import { useEffect, useRef } from "react";
import { AppState, StyleSheet } from "react-native";
import BottomNavigation from "@/components/BottomNavigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet from "@gorhom/bottom-sheet";
import AppBottomSheet from "@/components/AppBottomSheet";
import DailyCalories from "@/components/DailyCalories";
import { useTheme } from "react-native-paper";
import { useQueryClient } from "@tanstack/react-query";
import { EntryKeys, SettingsKeys } from "@/keys/QueryKeys";
import Screen from "@/components/Screen";

export default function Index() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const theme = useTheme();
  const queryClient = useQueryClient();

  const handleBottomSheetOnOpen = () => {
    bottomSheetRef.current?.snapToIndex(1);
  };

  useEffect(() => {
    // Invalidate the entries query when the app is opened.
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (nextAppState === "active") {
        queryClient.invalidateQueries({
          queryKey: EntryKeys.all,
        });
        queryClient.invalidateQueries({
          queryKey: SettingsKeys.all,
        });
      }
    });

    // Clean up subscription on unmount
    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <Screen>
      <GestureHandlerRootView style={styles.container}>
        <DailyCalories />
        <BottomNavigation onPress={handleBottomSheetOnOpen} />
        <AppBottomSheet ref={bottomSheetRef} />
      </GestureHandlerRootView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
