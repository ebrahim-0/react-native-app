import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface CheckboxProps {
  label?: string;
  checked: boolean;
  onChange?: (checked: boolean) => void;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  iconSize?: number;
  disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  disabled = false,
  style,
  labelStyle,
  iconSize = 20,
}) => {
  const handlePress = () => {
    onChange && onChange(!checked);
  };

  return (
    <TouchableOpacity
      onPress={!disabled ? handlePress : () => {}}
      style={[styles.container, style]}
      disabled={disabled}
    >
      <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
        {checked && <MaterialIcons name="check" size={iconSize} color="#fff" />}
      </View>
      {label && (
        <Text
          style={[styles.label, labelStyle]}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {/* {shortText(label, 40)} */}
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  checkbox: {
    width: 28, // Slightly larger for better touch targets
    height: 28,
    borderRadius: "100%", // Rounded checkbox
    borderWidth: 2,
    borderColor: "#CCC",
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    elevation: 1,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },
  checkboxChecked: {
    borderColor: "#490ef8",
    backgroundColor: "#490ef8",
  },
  label: {
    fontSize: 16,
    color: "#333", // Neutral dark color for the label
    marginLeft: 12, // Space between checkbox and label
    fontWeight: "500",
    width: 400,
  },
});

export default Checkbox;

const shortText = (text: string, length: number, place = "...") => {
  if (text.length <= length) return text;

  return text.slice(0, length) + place;
};
