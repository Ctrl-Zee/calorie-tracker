import { View, Text } from "react-native";
import React from "react";
import IconButton from "@/components/IconButton";
import { useClearAll } from "@/hooks/useClearAll";
import { useQueryClient } from "@tanstack/react-query";
import { EntryKeys } from "@/keys/QueryKeys";

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
      <IconButton icon="trash-o" onPress={handleClear} />
    </View>
  );
};

export default SettingsScreen;
