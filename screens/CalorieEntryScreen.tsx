import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useAddEntry } from "@/hooks/useAddEntry";
import { CalorieEntry } from "@/types/CalorieEntry";
import { useQueryClient } from "@tanstack/react-query";
import { EntryKeys } from "@/keys/QueryKeys";
import SheetButton from "@/components/SheetButton";
import { TextInput } from "react-native-paper";

const CalorieEntryScreen = () => {
  const [calories, setCalories] = useState<string>("");
  const { mutate: addCalories } = useAddEntry();
  const queryClient = useQueryClient();

  const handleSave = () => {
    const entry = {
      calories: parseInt(calories),
      date: new Date(),
      entryType: "manual",
      id: Math.random().toString(), //TODO reaplace with guid
    } as CalorieEntry;

    addCalories(entry, {
      onSettled: () => {
        resetInput();
        queryClient.invalidateQueries({
          queryKey: EntryKeys.all,
        });
      },
    });
  };

  const resetInput = () => {
    setCalories("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SheetButton icon="close" onPress={resetInput} />
        <SheetButton icon={"check"} onPress={handleSave} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={calories}
          onChangeText={setCalories}
          keyboardType="numeric"
          autoFocus={true}
          placeholder="0"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 20,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 50,
    marginBottom: 20,
  },
  inputContainer: {
    width: "80%",
  },
});

export default CalorieEntryScreen;
