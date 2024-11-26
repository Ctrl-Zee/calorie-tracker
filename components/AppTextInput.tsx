import { View, TextInput, TextInputProps, StyleSheet } from "react-native";

type AppTextInputProps = TextInputProps & {
  number: string;
  onChangeNumber: (number: string) => void;
};

const AppTextInput = ({
  number,
  onChangeNumber,
  ...props
}: AppTextInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        keyboardType="numeric"
        placeholder="0"
        placeholderTextColor={"white"}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#94a3b8",
    padding: 10,
  },
  input: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    height: 60,
  },
});

export default AppTextInput;
