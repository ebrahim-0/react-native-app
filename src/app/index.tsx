import { Button, Modal, Pressable, Text, View } from "react-native";
import React, { useState } from "react";
import CenteredModal from "@/components/CenteredModal";

const index = () => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 20 }}>
      <CenteredModal />

      {/* <Button
        title="Button"
        color="midnightblue"
        onPress={() => setIsOpened(true)}
      />
      <Modal
        animationType="slide"
        visible={isOpened}
        presentationStyle="pageSheet"
        onRequestClose={() => setIsOpened(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(234, 16, 16, 0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              padding: 20,
              borderRadius: 5,
              width: 300,
            }}
          >
            <Text>Modal content</Text>
            <Pressable
              style={{
                backgroundColor: "midnightblue",
                padding: 10,
                borderRadius: 5,
                marginTop: 10,
              }}
              onPress={() => setIsOpened(false)}
            >
              <Text style={{ color: "#fff" }}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal> */}
    </View>
  );
};

export default index;
