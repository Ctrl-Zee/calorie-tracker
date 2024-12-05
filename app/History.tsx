import { View, StyleSheet, ScrollView } from "react-native";
import { useGetHistoryByDate } from "@/hooks/useGetHistoryByDate";
import HistoryMealEntries from "@/features/history/components/HistoryMealEntries";
import HistoryTotal from "@/features/history/components/HistoryTotal";
import HistoryDatePicker from "@/features/history/components/HistoryDatePicker";
import { useState } from "react";
import { useTheme } from "react-native-paper";
import Screen from "@/components/Screen";

const History = () => {
  const [date, setDate] = useState(new Date());
  const { data: historySummary } = useGetHistoryByDate(date);
  const theme = useTheme();

  const handleOnDateChange = (newDate: Date) => {
    setDate(newDate);
  };

  return (
    <Screen>
      <HistoryDatePicker date={date} onChange={handleOnDateChange} />
      <ScrollView style={styles.scrollView}>
        <HistoryTotal
          totalCalories={historySummary?.totalCalories}
          dailyPercentage={historySummary?.dailyPercentage}
        />
        {historySummary?.items.map((history, index) => (
          <HistoryMealEntries key={index} item={history} />
        ))}
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    width: "100%",
    backgroundColor: "",
  },
});

export default History;
