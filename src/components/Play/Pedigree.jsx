import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ({ title, image }) {
  return (
    <View style={styles.container}>
      <View style={styles.diceContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </View>
      <View style={styles.myScore}></View>
      <View style={styles.rivalScore}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 1,
  },
  diceContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "flex-start",
    borderWidth: 1,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
    marginRight: 5,
  },
  image: {
    width: 20,
    height: 20,
  },
  textContainer: {
    flex: 1,
    flexGrow: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 13,
  },
  myScore: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: "#FFC000",
  },
  rivalScore: {
    flex: 1,
    borderWidth: 1,
  },
});
