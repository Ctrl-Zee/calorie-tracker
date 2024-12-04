import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useAddEntry } from "@/hooks/useAddEntry";
import { CalorieEntry, MealType } from "@/types/CalorieEntry";
import { useQueryClient } from "@tanstack/react-query";
import { EntryKeys } from "@/keys/QueryKeys";
import SheetButton from "@/components/SheetButton";
import { TextInput, Text, useTheme } from "react-native-paper";
import MealTypeOptions from "@/components/MealTypeOptions";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { getMealByTime } from "@/utils/MealByTime";
import Animated, { FadeInUp, FadeOutDown } from "react-native-reanimated";
import AntDesign from "@expo/vector-icons/AntDesign";

/**
 * Handles the input for the calorie logger.
 */
const CalorieLogger = () => {
  const [calories, setCalories] = useState<string>("");
  const [selectedMealType, setSelectedMealType] = useState<MealType | null>(
    getMealByTime(), // TODO: set the meal type when the bottom sheet is opened.
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { mutate: addCalories } = useAddEntry();
  const queryClient = useQueryClient();
  const theme = useTheme();

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
        <View style={styles.mealTypeButtonContainer}>
          <Text
            variant="titleLarge"
            style={styles.capitalize}
            onPress={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            {selectedMealType}
          </Text>
          <AntDesign
            name="caretdown"
            size={14}
            color={theme.colors.onSurface}
          />
        </View>
        <SheetButton icon={"check"} onPress={handleSave} />
      </View>

      {isDrawerOpen && (
        <Animated.View
          style={[styles.mealTypeContainer]}
          entering={FadeInUp}
          exiting={FadeOutDown}
        >
          <MealTypeOptions
            selectedMealType={selectedMealType}
            setSelectedMealType={setSelectedMealType}
          />
        </Animated.View>
      )}
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
    alignItems: "center",
    width: "100%",
    height: 50,
    marginBottom: 20,
  },
  mealTypeContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  mealTypeButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainer: {
    width: "85%",
  },
  capitalize: {
    textTransform: "capitalize",
  },
});

export default CalorieLogger;
