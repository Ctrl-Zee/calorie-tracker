import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useGetEntries } from "@/hooks/useGetEntries";

// TODO: Add a chart
const DailyCalories = () => {
  const { data: entries } = useGetEntries();
  const totalCalories =
    entries?.reduce((acc, entry) => acc + entry.calories, 0) ?? 0;
  return (
    <View>
      <Text
        style={[
          styles.calories,
          { color: totalCalories > 2000 ? "red" : "green" },
        ]}
      >
        {totalCalories}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  calories: {
    color: "green",
    fontSize: 68,
  },
});

export default DailyCalories;
