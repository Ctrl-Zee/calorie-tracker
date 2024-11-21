import { useCallback, useMemo, useRef } from "react";
import { Text, View, StyleSheet } from "react-native";
import BottomNavigation from "@/components/BottomNavigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import IconButton from "@/components/IconButton";
import AppBottomSheet from "@/components/AppBottomSheet";

export default function Index() {
  const snapPoints = useMemo(() => ["66%"], []);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleBottomSheetOnClose = () => {
    bottomSheetRef.current?.close();
  };

  const handleBottomSheetOnOpen = () => {
    console.log(bottomSheetRef.current);
    bottomSheetRef.current?.expand();
  };

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    [],
  );

  return (
    <GestureHandlerRootView className="flex flex-1 items-center justify-center">
      <Text>More to come</Text>
      <BottomNavigation onPress={handleBottomSheetOnOpen} />
      <AppBottomSheet ref={bottomSheetRef}>
        <Text>Awesome 🎉</Text>
      </AppBottomSheet>
    </GestureHandlerRootView>
  );
}
