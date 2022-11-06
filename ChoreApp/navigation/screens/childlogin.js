import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function LoginPageChild() {
  return (
    <View style={styles.LoginPageChild}>
      <View style={styles.Group735}>
        <View style={styles.Group757}>
          <View style={{styles: Rectangle11, height: Dimensions.get("screen").width * 0.04 }} />
        </View>
        <View style={styles.Rectangle10} />
      </View>
      <Text style={styles.Txt179}>Login</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  LoginPageChild: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 390,
    height: 844,
  },
  Group735: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: 271,
    none: "0px",
    width: 367,
    height: 184,
  },
  Group757: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 66,
  },
  Rectangle11: {
    backgroundColor: "rgba(217,217,217,1)",
    width: 85,
    height: 85,
    borderRadius: 15,
    marginRight: 9,
  },
  Rectangle14: {
    backgroundColor: "rgba(217,217,217,1)",
    width: 85,
    height: 85,
    borderRadius: 15,
    marginRight: 9,
  },
  Rectangle13: {
    backgroundColor: "rgba(217,217,217,1)",
    width: 85,
    height: 85,
    borderRadius: 15,
    marginRight: 9,
  },
  Rectangle12: {
    backgroundColor: "rgba(217,217,217,1)",
    width: 85,
    height: 85,
    borderRadius: 15,
  },

  Rectangle10: {
    backgroundColor: "rgba(217,217,217,1)",
    width: 173,
    height: 33,
  },

  Txt179: {
    position: "absolute",
    top: 422,
    left: 103,
    fontSize: 24,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 172,
    height: 34,
  },
})