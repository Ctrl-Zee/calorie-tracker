import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import AppTextInput from "@/components/AppTextInput";
import SheetButton from "@/components/SheetButton";
import { useAddEntry } from "@/hooks/useAddEntry";
import { CalorieEntry } from "@/types/CalorieEntry";
import { useQueryClient } from "@tanstack/react-query";
import { EntryKeys } from "@/keys/QueryKeys";

const CalorieEntryScreen = () => {
  const [calories, setCalories] = useState<string>("");
  const { mutate: addCalories } = useAddEntry();
  const queryClient = useQueryClient();

  const handleSave = () => {
    const entry = {
      calories: parseInt(calories),
      date: new Date(),
      entryType: "manual",
      id: Math.random().toString(),
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
        <SheetButton icon={"close"} onPress={resetInput} />
        <SheetButton icon={"check-circle-o"} onPress={handleSave} />
      </View>
      <View style={styles.inputContainer}>
        <AppTextInput
          autoFocus={true}
          number={calories}
          onChangeNumber={setCalories}
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
