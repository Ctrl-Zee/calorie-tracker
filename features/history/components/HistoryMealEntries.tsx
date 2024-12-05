import { HistoryItem } from "@/types/HistorySummary";
import { View, StyleSheet } from "react-native";
import { Text, Surface, useTheme } from "react-native-paper";

type HistoryItemProps = {
  item: HistoryItem;
};

const HistoryMealEntries = ({ item }: HistoryItemProps) => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text
          variant="titleLarge"
          style={[styles.sectionHeaderMeal, styles.capitalize]}
        >
          {item.mealType}
        </Text>
        <Text variant="titleMedium">{item.calories} kcal</Text>
      </View>

      {item.entries?.map((entry, index) => (
        <Surface
          key={index}
          mode="flat"
          style={[
            styles.entryContainer,
            { backgroundColor: theme.colors.surfaceVariant },
          ]}
        >
          <View style={styles.entryType}>
            <Text variant="bodyLarge" style={styles.capitalize}>
              {entry.entryType} entry
            </Text>
            <Text variant="bodyMedium">{entry.calories}</Text>
          </View>
          <View>
            <Text variant="bodyMedium" style={{ color: theme.colors.primary }}>
              {entry.calories}
            </Text>
            <Text variant="bodySmall" style={{ color: theme.colors.primary }}>
              kcal
            </Text>
          </View>
        </Surface>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  entryContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 12,
    padding: 12,
    marginVertical: 6,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  sectionHeaderMeal: {
    paddingRight: 12,
  },
  entryType: {
    gap: 6,
  },
  capitalize: {
    textTransform: "capitalize",
  },
});

export default HistoryMealEntries;
