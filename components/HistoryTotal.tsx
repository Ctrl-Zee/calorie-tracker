import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

type HistoryTotalProps = {
  totalCalories: number | undefined;
  dailyPercentage: number | undefined;
};

const HistoryTotal = ({
  totalCalories,
  dailyPercentage,
}: HistoryTotalProps) => {
  return (
    <View style={styles.container}>
      <Text variant="titleMedium">Total</Text>
      <View style={styles.headerTotals}>
        <Text variant="titleLarge">
          {totalCalories?.toLocaleString() ?? "0"}
        </Text>
        <Text variant="titleLarge">-</Text>
        <Text variant="titleLarge">{dailyPercentage ?? "0"}%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  headerTotals: {
    flexDirection: "row",
  },
});

export default HistoryTotal;
