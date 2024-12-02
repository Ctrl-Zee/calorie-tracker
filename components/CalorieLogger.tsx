import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useAddEntry } from "@/hooks/useAddEntry";
import { CalorieEntry, MealType } from "@/types/CalorieEntry";
import { useQueryClient } from "@tanstack/react-query";
import { EntryKeys } from "@/keys/QueryKeys";
import SheetButton from "@/components/SheetButton";
import { TextInput } from "react-native-paper";
import MealTypeOptions from "@/components/MealTypeOptions";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { getMealByTime } from "@/utils/MealByTime";

/**
 * Handles the input for the calorie logger.
 */
const CalorieLogger = () => {
  const [calories, setCalories] = useState<string>("");
  const [selectedMealType, setSelectedMealType] = useState<MealType | null>(
    getMealByTime(), // TODO: set the meal type when the bottom sheet is opened.
  );
  const { mutate: addCalories } = useAddEntry();
  const queryClient = useQueryClient();

  const handleSave = () => {
    const entry = {
      calories: parseInt(calories),
      date: new Date(),
      entryType: "manual",
      mealType: selectedMealType ?? "other",
      id: uuidv4(),
    } as CalorieEntry;

    if (!entry.calories || entry.calories <= 0 || !selectedMealType) {
      return;
    }

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
      <View style={styles.mealTypeContainer}>
        <MealTypeOptions
          selectedMealType={selectedMealType}
          setSelectedMealType={setSelectedMealType}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={calories}
          onChangeText={setCalories}
          keyboardType="numeric"
          autoFocus={false}
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
  mealTypeContainer: {
    width: "100%",
    marginBottom: 20,
  },
  inputContainer: {
    width: "80%",
  },
});

export default CalorieLogger;
