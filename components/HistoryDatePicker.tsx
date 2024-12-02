import { RealtiveDateFormatter } from "@/utils/RelativeDateFormatter";
import { View, StyleSheet } from "react-native";
import { Text, IconButton } from "react-native-paper";
import { subDays, addDays, isToday } from "date-fns";

type HistoryDatePickerProps = {
  date: Date;
  onChange: (newDate: Date) => void;
};

const HistoryDatePicker = ({ date, onChange }: HistoryDatePickerProps) => {
  return (
    <View style={styles.container}>
      <IconButton
        icon="arrow-left"
        mode="contained"
        onPress={() => onChange(subDays(date, 1))}
      />
      <Text variant="titleMedium">{RealtiveDateFormatter(date)}</Text>
      <IconButton
        icon="arrow-right"
        mode="contained"
        onPress={() => onChange(addDays(date, 1))}
        disabled={isToday(date)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
});

export default HistoryDatePicker;
