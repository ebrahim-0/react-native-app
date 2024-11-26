import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const InputController = ({
  control,
  name,
  placeholder,
  defaultValue,
  type = "text",
}: {
  control: any;
  name: string;
  placeholder: string;
  defaultValue?: string;
  type?: string;
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <View style={{ width: "100%" }}>
      <Controller
        control={control}
        rules={{
          required: "This field is required",
        }}
        name={name}
        render={({
          field: { onChange, onBlur, value, ...otherProps },
          fieldState: { error, ...others },
        }) => {
          return (
            <>
              <View style={style.container}>
                <TextInput
                  placeholder={placeholder}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  secureTextEntry={type === "password" && !showPassword}
                  value={value}
                  {...otherProps}
                  {...others}
                />
                {type === "password" && (
                  <MaterialCommunityIcons
                    name={showPassword ? "eye-off" : "eye"}
                    size={24}
                    color="#aaa"
                    onPress={toggleShowPassword}
                  />
                )}
              </View>
              {error && (
                <Text
                  style={{
                    color: "red",
                    marginBottom: 5,
                  }}
                >
                  {error.message}
                </Text>
              )}
            </>
          );
        }}
        defaultValue={defaultValue}
      />
    </View>
  );
};

export default InputController;

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    color: "#333",
    paddingVertical: 10,
    paddingRight: 10,
    fontSize: 16,
  },
});
