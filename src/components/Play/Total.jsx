import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ({ title, myScore, rivalScore }) {
  return (
    <>
      {title == "Total" ? (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{title}</Text>
          </View>
          <View style={styles.myScore}> {myScore} </View>
          <View style={styles.rivalScore}> {rivalScore}</View>
        </View>
      ) : (
        // Bonus
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.titleText}>+35</Text>
          </View>
          <View style={styles.myScore}>
            <View>
              <Text style={styles.scoreText}>{myScore}</Text>
            </View>
            <View>
              <Text style={styles.scoreText}>/63</Text>
            </View>
          </View>
          <View style={styles.rivalScore}>
            <Text style={styles.scoreText}>{rivalScore}</Text>
            <Text style={styles.scoreText}>/63</Text>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  titleContainer: {
    flex: 2,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  titleText: {
    fontFamily: "bold",
    color: "white",
  },
  scoreText: {
    fontFamily: "bold",
  },
  myScore: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: "#FFC000",
    alignItems: "center",
    justifyContent: "center",
  },
  rivalScore: {
    flex: 1,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
