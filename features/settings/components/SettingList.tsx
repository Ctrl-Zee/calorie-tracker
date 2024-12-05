import { View, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

type SettingListProps = {
  items: JSX.Element[];
};

const SettingList = ({ items }: SettingListProps) => {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.surfaceVariant,
        },
      ]}
    >
      {items.map((item, index) => (
        <View
          key={index}
          style={[
            styles.container__item,
            index === items.length - 1 && { borderBottomWidth: 0 },
          ]}
        >
          {item}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 16,
    paddingHorizontal: 16,
  },
  container__item: {
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    paddingVertical: 8,
  },
});
export default SettingList;
