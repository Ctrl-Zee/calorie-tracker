import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";

type ScreenProps = {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
};

const Screen = ({ style, children }: ScreenProps) => {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.colors.background },
        style,
      ]}
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
