import { Keyboard } from "react-native";
import React from "react";
import { useBottomSheet } from "@gorhom/bottom-sheet";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { IconButton } from "react-native-paper";

type SheetButtonProps = {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  onPress?: () => void;
};

const SheetButton = ({ icon, onPress }: SheetButtonProps) => {
  const { close } = useBottomSheet();

  const handleClose = () => {
    Keyboard.dismiss();
    onPress?.();
    close();
  };

  return <IconButton icon={icon} size={34} onPress={handleClose} />;
};

export default SheetButton;
