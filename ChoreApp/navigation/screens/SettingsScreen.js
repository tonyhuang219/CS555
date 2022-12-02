
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  SafeAreaView,
  Switch
} from "react-native";

import * as Icon from "react-native-vector-icons";
const { width, height } = Dimensions.get("screen");

export default function Settings() {
  
    return (
      <View style={styles.section}>
      <View>
             <Text style={styles.title}></Text>
            </View>
            <View>
              <View style={styles.option}>
                <Text style={{ fontWeight: "500" }}>
                  Notifications
                </Text>
                <Switch
         
                  ios_backgroundColor="#EAEAED"
                  trackColor={{ false: "#EAEAED", true: "#FF7657" }}
                  ///onValueChange={() =>
                      //TODO
                  //}
                />
              </View>
              <View style={styles.option}>
                <Text style={{ fontWeight: "500" }}>
                  Show only highly rated spots
                </Text>
                <Switch
                  ios_backgroundColor="#EAEAED"
                  trackColor={{ false: "#EAEAED", true: "#FF7657" }}
                  //onValueChange={() =>
                     //TODO
                  //}
                />
              </View>
              <View style={styles.option}>
                <Text style={{ fontWeight: "500" }}>Show only Free Spots</Text>
                <Switch
                  ios_backgroundColor="#EAEAED"
                  trackColor={{ false: "#EAEAED", true: "#FF7657" }}
                  //onValueChange={() =>
                     //TODO
                  //}
                />
              </View>
            </View>
          </View>
 
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: height * 0.1,
    width: width,
    paddingHorizontal: 14
  },
  section: {
    flexDirection: "column",
    marginHorizontal: 14,
    marginBottom: 14,
    paddingBottom: 24,
    borderBottomColor: "#EAEAED",
    borderBottomWidth: 1
  },
  title: {
    fontSize: 18,
    marginVertical: 14
  },
  group: {
    flexDirection: "row",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#FF7657",
    justifyContent: "space-between"
  },
  button: {
    flex: 1,
    padding: 14,
    alignContent: "center",
    alignItems: "center"
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "500"
  },
  active: {
    backgroundColor: "#FF7657"
  },
  activeText: {
    color: "#FFF"
  },
  first: {
    borderTopLeftRadius: 13,
    borderBottomLeftRadius: 13
  },
  last: {
    borderTopRightRadius: 13,
    borderBottomRightRadius: 13
  },
  option: {
    marginBottom: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

  /*
  const [isEnabled, setIsEnabled] = React.useState(false);

  return (
    <View style={styles.container}>
      <Text>{"Notifications".toString()}</Text>
      <Switch
        value={isEnabled}
        onValueChange={(value) => setIsEnabled(value)}
        trackColor={{ false: "#e9e9e9", true: "#2ff56f" }}
        thumbColor={isEnabled ? "#ffffff" : "#ffffff"}
        ios_backgroundColor="#ff0000"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
})
*/

