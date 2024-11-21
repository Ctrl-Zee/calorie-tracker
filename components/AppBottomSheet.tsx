import React, { forwardRef, useCallback } from "react";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  useBottomSheet,
} from "@gorhom/bottom-sheet";
import IconButton from "./IconButton";
import { ContentType } from "@/types/ContentTypes";
import HistoryScreen from "@/screens/HistoryScreen";
import CalorieScreen from "@/screens/CalorieScreen";
import SettingsScreen from "@/screens/SettingsScreen";

type AppBottomSheetProps = {
  contentType: ContentType | null;
};

const ContentComponents: Record<ContentType, JSX.Element> = {
  history: <HistoryScreen />,
  calorie: <CalorieScreen />,
  settings: <SettingsScreen />,
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
  ({ contentType }, ref) => {
    const ContentComponent = contentType
      ? ContentComponents[contentType]
      : null;

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
      <BottomSheet
        ref={ref}
        snapPoints={["66%"]}
        index={-1}
        backdropComponent={renderBackdrop}
      >
        <BottomSheetView className="flex flex-row justify-end">
          <CloseButton />
        </BottomSheetView>
        <BottomSheetView className="flex flex-1 items-center justify-center">
          {ContentComponent}
        </BottomSheetView>
      </BottomSheet>
    );
  },
);

export default AppBottomSheet;
