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
                  style={style.input}
                  value={value}
                  {...otherProps}
                  {...others}
                />
                {type === "password" && (
                  <MaterialCommunityIcons
                    name={showPassword ? "eye-off" : "eye"}
                    size={24}
                    color="#aaa"
                    style={{ paddingHorizontal: 8 }}
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
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
  },
  input: {
    flex: 1,
    color: "#333",
    paddingHorizontal: 15,
  },
});
