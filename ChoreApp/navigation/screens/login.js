import React, { useState } from "react";
import { StyleSheet, View, Dimensions, Text, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { TextInput } from "react-native-paper";
import { logInWithEmail, getEmail } from "../../backend/firebase";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          activeUnderlineColor="#A32638"
          label="Email"
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.textInput}
          activeUnderlineColor="#A32638"
          label="Password"
          secureTextEntry
          onChangeText={setPassword}
        />
        <View style={{ height: Dimensions.get("screen").width * 0.04 }}></View>
        <Button title="Log in"           
            onPress={async () => {
            let result = await logInWithEmail(email, password);
          }}/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    width: "80%",
    marginBottom: 10,
    backgroundColor: "transparent",
  },
});
