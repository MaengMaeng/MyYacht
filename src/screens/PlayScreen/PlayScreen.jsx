import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import {
  diamond,
  clover,
  home,
  stairs,
  stairsbox,
  pentagon,
  dice1,
  dice2,
  dice3,
  dice4,
  dice5,
  dice6,
} from "../../../assets/play";
import { Pedigree, Total } from "../../components/Play";
export default function () {
  return (
    <View style={styles.container}>
      <View style={styles.pedigreeContainer}>
        <View style={styles.PedigreeList}>
          <Pedigree title="Aces" image={dice1} />
          <Pedigree title="Duces" image={dice2} />
          <Pedigree title="Threes" image={dice3} />
          <Pedigree title="Fours" image={dice4} />
          <Pedigree title="Fives" image={dice5} />
          <Pedigree title="Sixes" image={dice6} />

          <View style={styles.Bonus}>
            <Total title="Bonus" myScore="2" rivalScore="50" />
          </View>
        </View>
        <View style={styles.PedigreeList}>
          <Pedigree title="Choice" image={diamond} />
          <Pedigree title="4 Of a Kind" image={clover} />
          <Pedigree title="Full House" image={home} />
          <Pedigree title="Small Straight" image={stairs} />
          <Pedigree title="Large Straight" image={stairsbox} />
          <Pedigree title="Yacht" image={pentagon} />
          <View style={styles.Total}>
            <Total title="Total" myScore="133" rivalScore="350" />
          </View>
        </View>
      </View>
      <View style={styles.diceContainer}>
        <View style={styles.dice}>
          <Image source={dice1} style={styles.diceImage} />
        </View>
        <View style={styles.dice}>
          <Image source={dice2} style={styles.diceImage} />
        </View>
        <View style={styles.dice}>
          <Image source={dice3} style={styles.diceImage} />
        </View>
        <View style={styles.dice}>
          <Image source={dice4} style={styles.diceImage} />
        </View>
        <View style={styles.dice}>
          <Image source={dice5} style={styles.diceImage} />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Text>Roll</Text>
        </View>
        <View style={styles.button}>
          <Text>Submit</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  pedigreeContainer: {
    flex: 9,
    flexDirection: "row",
    // borderWidth: 2,
    // borderColor: "black",
    // borderRadius: 10,
    marginVertical: 20,
    // marginHorizontal: 10,
  },

  PedigreeList: {
    flex: 1,
    // marginVertical: 10,
    marginHorizontal: 10,
  },

  Bonus: {
    flex: 1.5,
    marginTop: 10,
  },
  Total: {
    flex: 1.5,
    marginTop: 10,
  },
  diceContainer: {
    flex: 2,
    flexDirection: "row",
    // borderWidth: 2,
    marginVertical: 20,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  diceImage: {
    width: 60,
    height: 60,
  },
  dice: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 20,
    marginHorizontal: 10,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 5,
    marginHorizontal: 20,
  },
});
