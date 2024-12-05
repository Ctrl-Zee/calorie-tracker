import { View, StyleSheet } from "react-native";
import React from "react";
import { IconButton, useTheme } from "react-native-paper";
import { Link, useNavigation } from "expo-router";

type BottomNavigationProps = {
  onPress: () => void;
};

const BottomNavigation = ({ onPress }: BottomNavigationProps) => {
  const theme = useTheme();
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Link href={"/History"}>
        <IconButton icon="chart-bar" size={34} />
      </Link>

      <IconButton
        icon="plus"
        size={44}
        mode={"contained-tonal"}
        iconColor={theme.colors.onPrimary}
        containerColor={theme.colors.primary}
        onPress={() => onPress()}
      />
      <Link href={"/settings"}>
        <IconButton icon="cog" size={34} />
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 48,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
});

export default BottomNavigation;
