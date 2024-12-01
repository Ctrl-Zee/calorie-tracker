import { forwardRef, useCallback, useState } from "react";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import CalorieLogger from "@/components/CalorieLogger";
import { Keyboard, StyleSheet } from "react-native";
import { getMealByTime } from "@/utils/MealByTime";

type AppBottomSheetProps = {};

const AppBottomSheet = forwardRef<BottomSheet, AppBottomSheetProps>(
  ({}, ref) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

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
      >
        <BottomSheetView style={styles.container}>
          <CalorieLogger isOpen />
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
