import React, { forwardRef, useCallback } from "react";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { ContentType } from "@/types/ContentTypes";
import HistoryScreen from "@/screens/HistoryScreen";
import CalorieEntryScreen from "@/screens/CalorieEntryScreen";
import SettingsScreen from "@/screens/SettingsScreen";
import { Keyboard, StyleSheet } from "react-native";

type AppBottomSheetProps = {
  contentType: ContentType | null;
};

const ContentComponents: Record<ContentType, JSX.Element> = {
  history: <HistoryScreen />,
  calorie: <CalorieEntryScreen />,
  settings: <SettingsScreen />,
};

const AppBottomSheet = forwardRef<BottomSheet, AppBottomSheetProps>(
  ({ contentType }, ref) => {
    const ContentComponent = contentType
      ? ContentComponents[contentType]
      : null;

    const renderBackdrop = useCallback(
      (props: any) => (
        <BottomSheetBackdrop
          onPress={() => {
            Keyboard.dismiss();
          }}
          appearsOnIndex={0}
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
          {ContentComponent}
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
