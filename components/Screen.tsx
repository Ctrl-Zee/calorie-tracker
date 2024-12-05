import { View, StyleSheet } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";

type ScreenProps = {
  children: React.ReactNode;
};

const Screen = ({ children }: ScreenProps) => {
  const theme = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});

export default Screen;
