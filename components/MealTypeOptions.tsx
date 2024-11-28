import { MealType } from "@/types/CalorieEntry";
import { useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { useTheme } from "react-native-paper";

const buttonOption: MealType[] = [
  "breakfast",
  "lunch",
  "dinner",
  "snack",
  "other",
];

type MealTypeOptionsProps = {
  selectedMealType: MealType | null;
  setSelectedMealType: (mealType: MealType) => void;
};

const MealTypeOptions = ({
  selectedMealType,
  setSelectedMealType,
}: MealTypeOptionsProps) => {
  const theme = useTheme();

  const isSelected = (mealType: MealType) => {
    return selectedMealType === mealType;
  };

  const handleOnPress = (mealType: MealType) => {
    setSelectedMealType(mealType);
  };

  return (
    <View style={styles.buttonContainer}>
      {buttonOption.map((button, index) => (
        <Pressable
          key={index}
          style={[
            styles.button,
            isSelected(button) && {
              backgroundColor: theme.colors.tertiaryContainer,
            },
          ]}
          onPress={() => handleOnPress(button)}
        >
          <Text style={styles.buttonText}>{button}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 14,
  },
  buttonText: {
    textTransform: "capitalize",
  },
});

export default MealTypeOptions;
