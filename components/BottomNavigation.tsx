import { View } from "react-native";
import React from "react";
import IconButton from "./IconButton";

const BottomNavigation = () => {
  return (
    <View className="absolute bottom-12 w-full">
      <View className="flex flex-1 flex-row gap-x-4 justify-center items-center">
        <IconButton
          variant={"transparent"}
          icon={"bar-chart"}
          iconSize={34}
          onPress={() => alert("history")}
        />
        <IconButton
          variant={"primary"}
          icon={"plus"}
          size={"large"}
          onPress={() => alert("add")}
        />
        <IconButton
          variant={"transparent"}
          icon={"gear"}
          iconSize={34}
          onPress={() => alert("settings")}
        />
      </View>
    </View>
  );
};

export default BottomNavigation;
