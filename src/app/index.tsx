import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import CenteredModal from "@/components/CenteredModal";

const index = () => {
  const [statusBarHidden, setStatusBarHidden] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 20 }}>
      <StatusBar
        backgroundColor="plum"
        barStyle="dark-content"
        translucent={true}
        hidden={statusBarHidden}
      />

      <TouchableOpacity onPress={() => setStatusBarHidden((prev) => !prev)}>
        <Text>Toogle StatusBar</Text>
      </TouchableOpacity>

      <CenteredModal />
    </View>
  );
};

export default index;
