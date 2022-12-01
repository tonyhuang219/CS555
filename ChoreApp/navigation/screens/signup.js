import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Button,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { TextInput } from "react-native-paper";
import { signUpWithEmail, getEmail } from "../../backend/firebase";

export default function SignupScreen({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");

  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          activeUnderlineColor="#00008B"
          label="First Name"
          onChangeText={setfName}
        />
        <TextInput
          style={styles.textInput}
          activeUnderlineColor="#00008B"
          label="Last Name"
          onChangeText={setlName}
        />
        <TextInput
          style={styles.textInput}
          activeUnderlineColor="#00008B"
          label="Email"
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.textInput}
          activeUnderlineColor="#00008B"
          label="Password"
          secureTextEntry
          onChangeText={setPassword}
        />
        <View style={{ height: Dimensions.get("screen").width * 0.04 }}></View>
        <Pressable
          style={styles.buttonSignup}
          onPress={async () => {
            let result = await signUpWithEmail(fName, lName, email, password);
            if (result = "success"){
              navigation.navigate("Login");
            }
            else{
              console.log("can't sign up")
            }
          }}
        >
          <Text style={styles.text}>Signup</Text>
        </Pressable>
        <View style={{ height: Dimensions.get("screen").width * 0.05 }}></View>
        <Pressable style={styles.buttonLogin} onPress={async () => {navigation.navigate("Login")}}>
          <Text style={styles.textLogin}>Already have an account? Log in</Text>
        </Pressable>
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
  buttonSignup: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 40,
    elevation: 3,
    color: "white",
    backgroundColor: "#00008B",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
  },
  buttonLogin: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 40,
    elevation: 3,
    color: "#00008B",
    backgroundColor: "white",
  },
  textLogin: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "#00008B",
  },
});