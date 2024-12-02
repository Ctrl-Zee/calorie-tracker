import React, { useMemo } from "react";
import { isToday } from "date-fns";
import { View, Text, StyleSheet } from "react-native";
import { useGetEntries } from "@/hooks/useGetEntries";
import { DAILY_GOAL } from "@/types/Constants";

const DailyCalories = () => {
  const { data: entries } = useGetEntries();

  const totalCalories = useMemo(() => {
    return (
      entries
        ?.filter((entry) => isToday(entry.date))
        .reduce((acc, entry) => acc + entry.calories, 0) ?? 0
    );
  }, [entries]);

  const percentageFilled = Math.min((totalCalories / DAILY_GOAL) * 100, 100);
  const totalPercentage = Math.round((totalCalories / DAILY_GOAL) * 100);
  const remainder = DAILY_GOAL - totalCalories;

  return (
    <View style={styles.container}>
      {/* DEBUG */}
      {/* {entries?.map((entry) => (
        <Text key={entry.id}>
          {entry.date.toString()}: {entry.calories}
        </Text>
      ))} */}
      <Text
        style={[
          styles.calories,
          { color: totalCalories > DAILY_GOAL ? "#FF3B3B" : "#4CAF50" },
        ]}
      >
        {totalCalories}
      </Text>
      <View style={styles.barContainer}>
        <View
          style={[
            styles.barFill,
            {
              width: `${percentageFilled}%`,
              backgroundColor:
                totalCalories > DAILY_GOAL ? "#FF3B3B" : "#4CAF50",
            },
          ]}
        />
      </View>
      <View style={styles.goalContainer}>
        <Text style={styles.goalText}>{totalPercentage} %</Text>
        <Text style={styles.goalText}>
          {remainder > 0
            ? `Remaining: ${remainder}`
            : `Over: ${Math.abs(remainder)}`}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  calories: {
    fontSize: 68,
    fontWeight: "bold",
    marginBottom: 30,
  },
  barContainer: {
    width: "100%",
    height: 20,
    backgroundColor: "#cbd5e1",
    borderRadius: 10,
    overflow: "hidden",
  },
  barFill: {
    height: "100%",
    borderRadius: 10,
  },
  goalContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  goalText: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 30,
  },
});

export default DailyCalories;
