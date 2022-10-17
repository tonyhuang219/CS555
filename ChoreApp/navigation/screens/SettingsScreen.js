import * as React from 'react';
import { View, Text } from 'react-native';

export default function SettingsScreen({ navigation }) {
    return (
        <View style={styles.Settings}>
          <Text style={styles.Txt561}>Settings</Text>
          <View style={styles.Group290}>
            <Image
              style={styles.Image3}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/6bmqgh71zor-1%3A81?alt=media&token=3501d6fe-1720-4027-9760-32818dd53405",
              }}
            />
            <Image
              style={styles.Image1}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/6bmqgh71zor-1%3A79?alt=media&token=4d690bfc-0181-405f-a0b0-8c0a7528106d",
              }}
            />
            <Image
              style={styles.Image2}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/6bmqgh71zor-1%3A80?alt=media&token=3d57e3e3-b42e-4089-810c-637f265d646d",
              }}
            />
            <View style={styles.Group1072}>
              <Image
                style={styles.Image4}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/6bmqgh71zor-1%3A82?alt=media&token=bf37df4a-b9c0-4d29-993b-8a7cf7ada011",
                }}
              />
            </View>
          </View>
          <Image
            style={styles.Rectangle10}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/6bmqgh71zor-28%3A3?alt=media&token=8d652c74-ab74-45cf-8c72-79707ab5ff4b",
            }}
          />
          <View style={styles.Rectangle15} />
          <Text style={styles.Txt467}>General</Text>
          <Image
            style={styles.Rectangle18}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/6bmqgh71zor-28%3A24?alt=media&token=90204c31-c15a-4c54-aedf-838e11eb8b59",
            }}
          />
          <Text style={styles.Txt2101}>Email Notifications</Text>
          <View style={styles.Rectangle21} />
          <View style={styles.Rectangle22} />
          <View style={styles.Rectangle20} />
          <View style={styles.Rectangle23} />
          <Text style={styles.Txt219}>Notifications</Text>
          <Image
            style={styles.Rectangle16}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/6bmqgh71zor-28%3A20?alt=media&token=cba3547e-d563-464b-b09b-5c34062261c7",
            }}
          />
          <View style={styles.Rectangle17} />
          <Text style={styles.Txt557}>Family</Text>
          <Text style={styles.Txt303}>Push Notifications</Text>
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
  Txt561: {
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
  Group290: {
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
  Group1072: {
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
  Txt467: {
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
  Txt2101: {
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
  Txt219: {
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
  Txt557: {
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
  Txt303: {
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
