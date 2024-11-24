import { View, Text, TextInput } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";

const InputController = ({
  control,
  name,
  placeholder,
  defaultValue,
}: {
  control: any;
  name: string;
  placeholder: string;
  defaultValue?: string;
}) => {
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
              <TextInput
                placeholder={placeholder}
                onBlur={onBlur}
                onChangeText={onChange}
                secureTextEntry
                style={{
                  width: "100%",
                  height: 50,
                  borderWidth: 1,
                  borderColor: "#ccc",
                  borderRadius: 10,
                  paddingHorizontal: 15,
                }}
                value={value}
                {...otherProps}
                {...others}
              />
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
