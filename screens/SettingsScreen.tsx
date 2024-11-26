import React from "react";
import { View } from "react-native";
import { useClearAll } from "@/hooks/useClearAll";
import { useQueryClient } from "@tanstack/react-query";
import { EntryKeys } from "@/keys/QueryKeys";
import { IconButton } from "react-native-paper";

const SettingsScreen = () => {
  const { mutate: clearEntries } = useClearAll();
  const queryClient = useQueryClient();

  const handleClear = () => {
    clearEntries();
    queryClient.invalidateQueries({
      queryKey: EntryKeys.all,
    });
  };

  return (
    <View className="flex flex-1 items-center justify-center">
      <IconButton icon="trash-can" mode={"contained"} onPress={handleClear} />
    </View>
  );
};

export default SettingsScreen;
