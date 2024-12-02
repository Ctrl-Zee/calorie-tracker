import { View, StyleSheet, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import { useGetHistoryByDate } from "@/hooks/useGetHistoryByDate";
import HistoryMealEntries from "@/components/HistoryMealEntries";
import HistoryTotal from "@/components/HistoryTotal";

const History = () => {
  const { data: historySummary } = useGetHistoryByDate(new Date());

  return (
    <View style={styles.container}>
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
