import { View, StyleSheet } from "react-native";
import React from "react";
import IconButton from "./IconButton";
import { ContentType } from "@/types/ContentTypes";

type BottomNavigationProps = {
  onPress: (contentType: ContentType) => void;
};

const BottomNavigation = ({ onPress }: BottomNavigationProps) => {
  return (
    <View style={styles.container}>
      <View className="flex flex-1 flex-row items-center justify-center gap-x-4">
        <IconButton
          variant={"transparent"}
          icon={"bar-chart"}
          iconSize={34}
          onPress={() => onPress("history")}
        />
        <IconButton
          variant={"primary"}
          icon={"plus"}
          size={"large"}
          onPress={() => onPress("calorie")}
        />
        <IconButton
          variant={"transparent"}
          icon={"gear"}
          iconSize={34}
          onPress={() => onPress("settings")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 48,
    width: "100%",
  },
});

export default BottomNavigation;
