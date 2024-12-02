import React from "react";
import { View, StyleSheet } from "react-native";
import { useClearAll } from "@/hooks/useClearAll";
import { useQueryClient } from "@tanstack/react-query";
import { EntryKeys } from "@/keys/QueryKeys";
import { IconButton, useTheme } from "react-native-paper";

const Settings = () => {
  const { mutate: clearEntries } = useClearAll();
  const queryClient = useQueryClient();
  const theme = useTheme();

  const handleClear = () => {
    clearEntries();
    queryClient.invalidateQueries({
      queryKey: EntryKeys.all,
    });
  };

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <IconButton icon="trash-can" mode={"contained"} onPress={handleClear} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});

export default Settings;
