import { useRef } from "react";
import { StyleSheet } from "react-native";
import BottomNavigation from "@/components/BottomNavigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet from "@gorhom/bottom-sheet";
import AppBottomSheet from "@/components/AppBottomSheet";
import DailyCalories from "@/components/DailyCalories";
import { useTheme } from "react-native-paper";

export default function Index() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const theme = useTheme();

  const handleBottomSheetOnOpen = () => {
    bottomSheetRef.current?.snapToIndex(1);
  };

  return (
    <GestureHandlerRootView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <DailyCalories />
      <BottomNavigation onPress={handleBottomSheetOnOpen} />
      <AppBottomSheet ref={bottomSheetRef} />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
