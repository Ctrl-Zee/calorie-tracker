import { View, StyleSheet, ScrollView } from "react-native";
import { useGetHistoryByDate } from "@/hooks/useGetHistoryByDate";
import HistoryMealEntries from "@/components/HistoryMealEntries";
import HistoryTotal from "@/components/HistoryTotal";
import HistoryDatePicker from "@/components/HistoryDatePicker";
import { useState } from "react";

const History = () => {
  const [date, setDate] = useState(new Date());
  const { data: historySummary } = useGetHistoryByDate(date);

  const handleOnDateChange = (newDate: Date) => {
    setDate(newDate);
  };

  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  scrollView: {
    width: "100%",
    backgroundColor: "",
  },
});

export default History;
