import * as React from 'react';
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"


export default function CalendarScreen({ navigation }) {
      return (
        <View style={styles.Calendar}>
          <View style={styles.Month}>
            <Image
              style={styles.Arrow}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/3sa791u4y8x-12%3A13?alt=media&token=dafbdaa8-1de9-4e2e-8a9e-94dbc988e7b8",
              }}
            />
            <Image
              style={styles.Arrow1}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/3sa791u4y8x-12%3A11?alt=media&token=26e70cff-85e2-403f-9ba7-5a5e9ecb0bf8",
              }}
            />
            <Text style={styles.Txt755}>February 2021</Text>
          </View>
          <View style={styles.Dates}>
            <View style={styles.Row}>
              <Text style={styles.Txt650}>MON</Text>
              <Text style={styles.Txt2210}>1</Text>
              <Text style={styles.Txt2210}>8</Text>
              <Text style={styles.Txt2210}>15</Text>
              <Text style={styles.Txt2210}>22</Text>
              <Text style={styles.Txt2210}>29</Text>
            </View>
            <View style={styles.Row}>
              <Text style={styles.Txt650}>TUE</Text>
              <Text style={styles.Txt2210}>2</Text>
              <Text style={styles.Txt2210}>9</Text>
              <Text style={styles.Txt2210}>16</Text>
              <Text style={styles.Txt2210}>23</Text>
              <Text style={styles.Txt2210}>30</Text>
            </View>
            <View style={styles.Row}>
              <Text style={styles.Txt650}>WED</Text>
              <Text style={styles.Txt2210}>3</Text>
              <Text style={styles.Txt2210}>10</Text>
              <Text style={styles.Txt2210}>17</Text>
              <Text style={styles.Txt2210}>24</Text>
              <Text style={styles.Txt2210}>31</Text>
            </View>
            <View style={styles.Row}>
              <Text style={styles.Txt650}>THU</Text>
              <Text style={styles.Txt2210}>4</Text>
              <Text style={styles.Txt2210}>11</Text>
              <Text style={styles.Txt2210}>18</Text>
              <Text style={styles.Txt2210}>25</Text>
              <Text style={styles.Txt785}>1</Text>
            </View>
            <View style={styles.Row}>
              <Text style={styles.Txt650}>FRI</Text>
              <Text style={styles.Txt2210}>5</Text>
              <Text style={styles.Txt2210}>12</Text>
              <Text style={styles.Txt2210}>19</Text>
              <Text style={styles.Txt2210}>26</Text>
              <Text style={styles.Txt785}>2</Text>
            </View>
            <View style={styles.Row}>
              <Text style={styles.Txt650}>SAT</Text>
              <Text style={styles.Txt2210}>6</Text>
              <Text style={styles.Txt2210}>13</Text>
              <Text style={styles.Txt2210}>20</Text>
              <Text style={styles.Txt2210}>27</Text>
              <Text style={styles.Txt785}>3</Text>
            </View>
            <View style={styles.Row}>
              <Text style={styles.Txt650}>SUN</Text>
              <Text style={styles.Txt2210}>7</Text>
              <Text style={styles.Txt2210}>14</Text>
              <Text style={styles.Txt2210}>21</Text>
              <Text style={styles.Txt2210}>28</Text>
              <Text style={styles.Txt785}>4</Text>
            </View>
          </View>
        </View>
      )
    }

    const styles = StyleSheet.create({
      Calendar: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        paddingTop: 15,
        paddingBottom: 25,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        backgroundColor: "rgba(255, 255, 255, 1)",
        width: 390,
        height: 644,
      },
      Month: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
        marginBottom: 20,
        width: 358,
      },
      Arrow: {
        position: "absolute",
        top: 24,
        left: 358,
        width: 24,
        height: 24,
      },
      Arrow1: {
        width: 24,
        height: 24,
      },
      Txt755: {
        fontSize: 14,
        fontFamily: "Inter, sans-serif",
        fontWeight: "700",
        color: "rgba(0,0,0,1)",
      },

      Dates: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1,
        width: 358,
        height: 558,
      },
      Row: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: 558,
      },
      Txt650: {
        fontSize: 12,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
        opacity: 0.5,
      },
      Txt2210: {
        fontSize: 14,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
      },
      Txt2210: {
        fontSize: 14,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
      },
      Txt2210: {
        fontSize: 14,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
      },
      Txt2210: {
        fontSize: 14,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
      },
      Txt2210: {
        fontSize: 14,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
      },

      Row: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: 558,
      },
      Txt650: {
        fontSize: 12,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
        opacity: 0.5,
      },
      Txt2210: {
        fontSize: 14,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
      },
      Txt2210: {
        fontSize: 14,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
      },
      Txt2210: {
        fontSize: 14,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
      },
      Txt2210: {
        fontSize: 14,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
      },
      Txt2210: {
        fontSize: 14,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
      },

      Row: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: 558,
      },
      Txt650: {
        fontSize: 12,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
        opacity: 0.5,
      },
      Txt2210: {
        fontSize: 14,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
      },
      Txt2210: {
        fontSize: 14,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
      },
      Txt2210: {
        fontSize: 14,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
      },
      Txt2210: {
        fontSize: 14,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
      },
      Txt2210: {
        fontSize: 14,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
      },

      Row: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: 558,
      },
      Txt650: {
        fontSize: 12,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
        opacity: 0.5,
      },
      Txt2210: {
        fontSize: 14,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
      },
      Txt2210: {
        fontSize: 14,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
      },
      Txt2210: {
        fontSize: 14,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
      },
      Txt2210: {
        fontSize: 14,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
      },
      Txt785: {
        fontSize: 14,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
        opacity: 0.5,
      },

      Row: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: 558,
      },
      Txt650: {
        fontSize: 12,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
        opacity: 0.5,
      },
      Txt2210: {
        fontSize: 14,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
      },
      Txt2210: {
        fontSize: 14,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
      },
      Txt2210: {
        fontSize: 14,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
      },
      Txt2210: {
        fontSize: 14,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
      },
      Txt785: {
        fontSize: 14,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
        opacity: 0.5,
      },

      Row: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: 558,
      },
      Txt650: {
        fontSize: 12,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
        opacity: 0.5,
      },
      Txt2210: {
        fontSize: 14,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
      },
      Txt2210: {
        fontSize: 14,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
      },
      Txt2210: {
        fontSize: 14,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
      },
      Txt2210: {
        fontSize: 14,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
      },
      Txt785: {
        fontSize: 14,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
        opacity: 0.5,
      },

      Row: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: 558,
      },
      Txt650: {
        fontSize: 12,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
        opacity: 0.5,
      },
      Txt2210: {
        fontSize: 14,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
      },
      Txt2210: {
        fontSize: 14,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
      },
      Txt2210: {
        fontSize: 14,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
      },
      Txt2210: {
        fontSize: 14,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
      },
      Txt785: {
        fontSize: 14,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(0,0,0,1)",
        opacity: 0.5,
      },
    })
