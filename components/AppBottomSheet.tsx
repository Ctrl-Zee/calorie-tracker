import React, { forwardRef, useCallback } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import BottomSheet, {
  BottomSheetView,
  useBottomSheet,
} from "@gorhom/bottom-sheet";
import IconButton from "./IconButton";

type AppBottomSheetProps = {
  children?: React.ReactNode;
};

const CloseButton = () => {
  const { close } = useBottomSheet();
  return (
    <IconButton
      variant={"transparent"}
      icon={"close"}
      iconSize={34}
      onPress={() => close()}
    />
  );
};

const AppBottomSheet = forwardRef<BottomSheet, AppBottomSheetProps>(
  ({ children }, ref) => {
    return (
      <BottomSheet ref={ref} snapPoints={["66%"]} index={-1}>
        <BottomSheetView className="flex flex-row justify-end">
          <CloseButton />
        </BottomSheetView>
        <BottomSheetView className="flex flex-1 items-center justify-center">
          {children}
        </BottomSheetView>
      </BottomSheet>
    );
  },
);

export default AppBottomSheet;
