import { View, Text } from "react-native";
import React from "react";

const Great = ({ text }: { text: string }) => {
  return (
    <View
      style={{
        backgroundColor: "#f0f0f0",
        padding: 15,
        margin: 10,
        borderRadius: 5,
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Text>{text}</Text>
    </View>
  );
};

export default Great;
