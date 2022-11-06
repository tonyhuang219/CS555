import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function Settings() {
  return (
    <View style={styles.Settings}>
      <Text style={styles.Txt315}>Settings</Text>
      <View style={styles.Group5110}>
        <Image
          style={styles.Image3}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/s6dqa173m9l-1%3A81?alt=media&token=ee94f71e-fa85-4591-ac70-677c54fffb87",
          }}
        />
        <Image
          style={styles.Image1}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/s6dqa173m9l-1%3A79?alt=media&token=85d3313f-e9c9-4235-ba3f-8e45dbfd9486",
          }}
        />
        <Image
          style={styles.Image2}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/s6dqa173m9l-1%3A80?alt=media&token=c02072af-c1bb-49d4-935b-be7271d2750f",
          }}
        />
        <View style={styles.Group493}>
          <Image
            style={styles.Image4}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/s6dqa173m9l-1%3A82?alt=media&token=e2c19944-39e3-4e41-8c93-c49e48bea4eb",
            }}
          />
        </View>
      </View>
      <Image
        style={styles.Rectangle10}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/s6dqa173m9l-28%3A3?alt=media&token=6e5a779c-cc5f-49cf-85b0-03050271ad22",
        }}
      />
      <View style={styles.Rectangle15} />
      <Text style={styles.Txt567}>General</Text>
      <Image
        style={styles.Rectangle18}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/s6dqa173m9l-28%3A24?alt=media&token=0ec2cd9e-db79-42b2-b6bc-7a8c0d31f9f1",
        }}
      />
      <Text style={styles.Txt1085}>Email Notifications</Text>
      <View style={styles.Rectangle21} />
      <View style={styles.Rectangle22} />
      <View style={styles.Rectangle20} />
      <View style={styles.Rectangle23} />
      <Text style={styles.Txt295}>Notifications</Text>
      <Image
        style={styles.Rectangle16}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/s6dqa173m9l-28%3A20?alt=media&token=d86e260c-f3cc-4c5b-b555-9894c0f3eb37",
        }}
      />
      <View style={styles.Rectangle17} />
      <Text style={styles.Txt880}>Family</Text>
      <Text style={styles.Txt259}>Push Notifications</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Settings: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 390,
    height: 844,
  },
  Txt315: {
    position: "absolute",
    top: 54,
    left: 23,
    fontSize: 32,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: 203,
    height: 62,
  },
  Group5110: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    top: 743,
    none: "0px",
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 17,
    paddingRight: 8,
    borderRadius: 18,
    backgroundColor: "rgba(165,193,246,0.62)",
    width: 350,
    height: 80,
  },
  Image3: {
    width: 50,
    height: 50,
    marginRight: 39,
  },
  Image1: {
    width: 50,
    height: 50,
    marginRight: 40,
  },
  Image2: {
    width: 50,
    height: 50,
    marginRight: 34,
  },
  Group493: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 4,
    paddingRight: 6,
    borderRadius: 18,
    backgroundColor: "rgba(199,196,196,0.47)",
    width: 60,
    height: 60,
  },
  Image4: {
    width: 48,
    height: 50,
  },

  Rectangle10: {
    position: "absolute",
    top: 115,
    left: 23,
    width: 343,
    height: 69,
  },
  Rectangle15: {
    position: "absolute",
    top: 130,
    left: 49,
    backgroundColor: "white",
    /*  linear-gradient(0deg, rgba(64,163,219,1), rgba(64,163,219,1)), linear-gradient(0deg, rgba(219,64,64,1), rgba(219,64,64,1)) */
    width: 39,
    height: 39,
    borderRadius: 10,
  },
  Txt567: {
    position: "absolute",
    top: 140,
    left: 99,
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: 117,
    height: 21,
  },
  Rectangle18: {
    position: "absolute",
    top: 334,
    left: 33,
    width: 319,
    height: 88,
  },
  Txt1085: {
    position: "absolute",
    top: 385,
    left: 47,
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: 151,
    height: 21,
  },
  Rectangle21: {
    position: "absolute",
    top: 346,
    left: 273,
    backgroundColor: "rgba(107,223,132,1)",
    width: 51,
    height: 21,
    borderRadius: 10,
  },
  Rectangle22: {
    position: "absolute",
    top: 346,
    left: 303,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 21,
    height: 21,
    borderRadius: 10,
  },
  Rectangle20: {
    position: "absolute",
    top: 385,
    left: 273,
    backgroundColor: "rgba(107,223,132,1)",
    width: 51,
    height: 21,
    borderRadius: 10,
  },
  Rectangle23: {
    position: "absolute",
    top: 385,
    left: 303,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 21,
    height: 21,
    borderRadius: 10,
  },
  Txt295: {
    position: "absolute",
    top: 314,
    left: 23,
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 117,
    height: 21,
  },
  Rectangle16: {
    position: "absolute",
    top: 219,
    left: 23,
    width: 343,
    height: 69,
  },
  Rectangle17: {
    position: "absolute",
    top: 234,
    left: 49,
    backgroundColor: "white",
    /*  linear-gradient(0deg, rgba(64,219,107,1), rgba(64,219,107,1)), linear-gradient(0deg, rgba(219,64,64,1), rgba(219,64,64,1)) */
    width: 39,
    height: 39,
    borderRadius: 10,
  },
  Txt880: {
    position: "absolute",
    top: 244,
    left: 99,
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: 117,
    height: 21,
  },
  Txt259: {
    position: "absolute",
    top: 347,
    left: 47,
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: 151,
    height: 21,
  },
})
