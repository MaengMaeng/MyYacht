import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
export default function () {
  const [isToggled, setIsToggled] = useState(false);

  const onClickLeftTab = () => {
    setIsToggled(false);
  };
  const onClickRightTab = () => {
    setIsToggled(true);
  };
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={onClickLeftTab}>
          <View style={styles.buttonContainer}>
            <Text>목록</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onClickRightTab}>
          <View style={styles.buttonContainer}>
            <Text>신청</Text>
          </View>
        </TouchableOpacity>
      </View>
      {isToggled ? <FriendRequsetList /> : <FriendList />}
    </View>
  );
}

const FriendList = () => {
  return (
    <View style={styles.listContainer}>
      <Text> Friend List </Text>
    </View>
  );
};

const FriendRequsetList = () => {
  return (
    <View style={styles.listContainer}>
      <Text> FriendRequsetList</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  tabContainer: {
    top: 1,
    flexDirection: "row",
  },
  buttonContainer: {
    margin: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: "black",
  },
  listContainer: {
    marginHorizontal: 10,
    height: HEIGHT * (2 / 3),
    borderWidth: 1,
    borderColor: "black",
  },
});
