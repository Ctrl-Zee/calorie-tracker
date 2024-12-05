import { forwardRef, useCallback, useState } from "react";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import CalorieLogger from "@/features/home/components/CalorieLogger";
import { Keyboard, StyleSheet } from "react-native";
import { getMealByTime } from "@/utils/MealByTime";
import { useTheme } from "react-native-paper";

type AppBottomSheetProps = {};

const AppBottomSheet = forwardRef<BottomSheet, AppBottomSheetProps>(
  ({}, ref) => {
    const theme = useTheme();

    const renderBackdrop = useCallback(
      (props: any) => (
        <BottomSheetBackdrop
          onPress={() => {
            Keyboard.dismiss();
          }}
          disappearsOnIndex={-1}
          {...props}
        />
      ),
      [],
    );

    return (
      <BottomSheet
        ref={ref}
        snapPoints={["66%"]}
        index={-1}
        backdropComponent={renderBackdrop}
        handleStyle={{ backgroundColor: theme.colors.surface }}
        handleIndicatorStyle={{ backgroundColor: theme.colors.onSurface }}
      >
        <BottomSheetView
          style={[
            styles.container,
            { backgroundColor: theme.colors.background },
          ]}
        >
          <CalorieLogger />
        </BottomSheetView>
      </BottomSheet>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AppBottomSheet;
