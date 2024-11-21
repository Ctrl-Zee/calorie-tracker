import { useCallback, useRef, useState } from "react";
import { Text } from "react-native";
import BottomNavigation from "@/components/BottomNavigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import AppBottomSheet from "@/components/AppBottomSheet";
import { ContentType } from "@/types/ContentTypes";

export default function Index() {
  const [contentType, setContentType] = useState<ContentType | null>(null);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleBottomSheetOnOpen = (contentType: ContentType) => {
    setContentType(contentType);
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
      <AppBottomSheet ref={bottomSheetRef} contentType={contentType} />
    </GestureHandlerRootView>
  );
}
