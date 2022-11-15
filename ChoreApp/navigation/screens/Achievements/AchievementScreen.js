import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function AchievementScreen() {
  return (
    <View style={styles.AchievementScreen}>
      <View style={styles.Group463}>
        <View style={styles.Frame1}>
          <Text style={styles.Txt806}>Points:</Text>
          <Text style={styles.Txt372}>0</Text>
        </View>
        <View style={styles.Group091}>
          <View style={styles.Frame6}>
            <Text style={styles.Txt969}>Laser Tag</Text>
          </View>
          <View style={styles.Frame7}>
            <Text style={styles.Txt969}>Rock Climbing</Text>
          </View>
        </View>
        <View style={styles.Group398}>
          <View style={styles.Frame4}>
            <Text style={styles.Txt969}>New Toy</Text>
          </View>
          <View style={styles.Frame7}>
            <Text style={styles.Txt969}>Chocolate Bar</Text>
          </View>
        </View>
        <View style={styles.Group779}>
          <View style={styles.Frame4}>
            <Text style={styles.Txt969}>1 hour of video games</Text>
          </View>
          <View style={styles.Frame7}>
            <Text style={styles.Txt969}>Trip to disney</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  AchievementScreen: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 41,
    paddingBottom: 217,
    paddingLeft: 29,
    paddingRight: 38,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 390,
    height: 844,
  },
  Group463: {
    display: "flex",
    flexDirection: "column",
  },
  Frame1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 58,
  },
  Txt806: {
    fontSize: 36,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: 128,
    height: 33,
  },
  Txt372: {
    fontSize: 36,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
  },

  Group091: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 58,
  },
  Frame6: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 22,
    paddingBottom: 22,
    paddingLeft: 0,
    paddingRight: 0,
    marginRight: 41,
    borderRadius: 5,
    backgroundColor: "rgba(0,0,0,1)",
    width: 138,
    height: 113,
  },
  Txt969: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 130,
  },

  Frame7: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 22,
    paddingBottom: 22,
    paddingLeft: 0,
    paddingRight: 0,
    borderRadius: 5,
    backgroundColor: "rgba(0,0,0,1)",
    width: 138,
    height: 113,
  },
  Txt969: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 130,
  },

  Group398: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 97,
  },
  Frame4: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 22,
    paddingBottom: 22,
    paddingLeft: 0,
    paddingRight: 0,
    marginRight: 45,
    borderRadius: 5,
    backgroundColor: "rgba(0,0,0,1)",
    width: 138,
    height: 113,
  },
  Txt969: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 130,
  },

  Frame7: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 22,
    paddingBottom: 22,
    paddingLeft: 0,
    paddingRight: 0,
    borderRadius: 5,
    backgroundColor: "rgba(0,0,0,1)",
    width: 138,
    height: 113,
  },
  Txt969: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 130,
  },

  Group779: {
    display: "flex",
    flexDirection: "row",
  },
  Frame4: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 22,
    paddingBottom: 22,
    paddingLeft: 0,
    paddingRight: 0,
    marginRight: 45,
    borderRadius: 5,
    backgroundColor: "rgba(0,0,0,1)",
    width: 138,
    height: 113,
  },
  Txt969: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 130,
  },

  Frame7: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 22,
    paddingBottom: 22,
    paddingLeft: 0,
    paddingRight: 0,
    borderRadius: 5,
    backgroundColor: "rgba(0,0,0,1)",
    width: 138,
    height: 113,
  },
  Txt969: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 130,
  },
})
