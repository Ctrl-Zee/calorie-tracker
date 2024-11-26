import { View, StyleSheet } from "react-native";
import React from "react";
import { ContentType } from "@/types/ContentTypes";
import { IconButton } from "react-native-paper";

type BottomNavigationProps = {
  onPress: (contentType: ContentType) => void;
};

const BottomNavigation = ({ onPress }: BottomNavigationProps) => {
  return (
    <View style={styles.container}>
      <View className="flex flex-1 flex-row items-center justify-center gap-x-4">
        <IconButton
          icon="chart-bar"
          size={34}
          onPress={() => onPress("history")}
        />
        <IconButton
          icon="plus"
          size={44}
          mode={"contained-tonal"}
          onPress={() => onPress("calorie")}
        />
        <IconButton icon="cog" size={34} onPress={() => onPress("settings")} />
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
