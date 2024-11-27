import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import InputController from "@/components/InputController";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  currentPassword: yup
    .string()
    .required("Current Password is required")
    .matches(/[A-Z]/, "password must contain a uppercase letter")
    .matches(/[a-z]/, "password must contain a lowercase letter")
    .matches(/\d/, "password must contain a number")
    .matches(/[$%#*&@]/, "password must contain a symbol")
    .matches(/^\S*$/, "password must not contain a space")
    .min(8, "minimum password is 8 chars"),
  newPassword: yup
    .string()
    .required("New Password is required")
    .matches(/[A-Z]/, "password must contain a uppercase letter")
    .matches(/[a-z]/, "password must contain a lowercase letter")
    .matches(/\d/, "password must contain a number")
    .matches(/[$%#*&@]/, "password must contain a symbol")
    .matches(/^\S*$/, "password must not contain a space")
    .min(8, "minimum password is 8 chars"),
  confirmPassword: yup
    .string()
    .required("confirm password is required")
    .oneOf([yup.ref("newPassword")], "password does not match"),
});

const ResetPasswordModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  return (
    <View style={styles.container}>
      {/* Open Modal Button */}
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.openButton}
      >
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          reset();
          setModalVisible(false);
        }}
      >
        <Pressable
          style={styles.overlay}
          onPress={() => {
            reset();
            setModalVisible(false);
          }} // Close the modal when pressing outside
        >
          <KeyboardAvoidingView style={styles.modalView}>
            {/* Prevent taps on modal content from propagating */}
            <Pressable style={styles.modalContent} onPress={() => {}}>
              <Text style={styles.modalTitle}>Reset Password</Text>
              <InputController
                control={control}
                name="currentPassword"
                placeholder="Current Password"
                defaultValue=""
                type="password"
              />
              <InputController
                control={control}
                name="newPassword"
                placeholder="New Password"
                defaultValue=""
                // type="password"
              />

              <InputController
                control={control}
                name="confirmPassword"
                placeholder="Confirm New Password"
                defaultValue=""
                type="password"
              />

              <TouchableOpacity
                onPress={handleSubmit((data) => {
                  console.log(data);
                  setModalVisible(false);
                })}
                style={styles.updateButton}
              >
                <Text style={styles.buttonText}>Update</Text>
              </TouchableOpacity>
            </Pressable>
          </KeyboardAvoidingView>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  openButton: {
    backgroundColor: "#6200ee",
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent dim background
    justifyContent: "flex-end",
  },
  modalView: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // Shadow effect for Android
  },
  modalContent: {
    width: "100%", // Prevent touch propagation on modal content
    padding: 20,
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  updateButton: {
    width: "100%",
    backgroundColor: "#b785d6",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
});

export default ResetPasswordModal;
