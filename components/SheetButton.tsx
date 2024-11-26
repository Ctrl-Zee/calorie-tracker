import { Keyboard } from "react-native";
import React from "react";
import { useBottomSheet } from "@gorhom/bottom-sheet";
import IconButton from "./IconButton";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type SheetButtonProps = {
  icon: keyof typeof FontAwesome.glyphMap;
  onPress?: () => void;
};

const SheetButton = ({ icon, onPress }: SheetButtonProps) => {
  const { close } = useBottomSheet();

  const handleClose = () => {
    Keyboard.dismiss();
    onPress?.();
    close();
  };

  return (
    <IconButton
      variant={"transparent"}
      icon={icon}
      iconSize={34}
      onPress={handleClose}
    />
  );
};

export default SheetButton;
