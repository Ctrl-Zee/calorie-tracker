import { View } from "react-native";
import React from "react";
import IconButton from "./IconButton";

type BottomNavigationProps = {
  onPress: () => void;
};

const BottomNavigation = ({ onPress }: BottomNavigationProps) => {
  return (
    <View className="absolute bottom-12 w-full">
      <View className="flex flex-1 flex-row items-center justify-center gap-x-4">
        <IconButton
          variant={"transparent"}
          icon={"bar-chart"}
          iconSize={34}
          onPress={onPress}
        />
        <IconButton
          variant={"primary"}
          icon={"plus"}
          size={"large"}
          onPress={onPress}
        />
        <IconButton
          variant={"transparent"}
          icon={"gear"}
          iconSize={34}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

export default BottomNavigation;
