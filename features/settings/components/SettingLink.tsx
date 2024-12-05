import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Href, router } from "expo-router";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Icon, Text } from "react-native-paper";

type SettingLinkProps = {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  description: string;
  detail?: string;
  link: Href;
};

const SettingLink = ({ icon, description, detail, link }: SettingLinkProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => router.push(link)}
    >
      <View style={[styles.container__item]}>
        <Icon source={icon} size={20} />
        <Text variant="titleLarge">{description}</Text>
      </View>
      <View style={[styles.container__item]}>
        <Text variant="titleLarge">{detail}</Text>
        <Icon source="chevron-right" size={30} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container__item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
});

export default SettingLink;
