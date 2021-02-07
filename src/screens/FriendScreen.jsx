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
  const [isReqSelected, setIsReqSelected] = useState(false);

  const onClickLeftTab = () => {
    setIsReqSelected(false);
  };
  const onClickRightTab = () => {
    setIsReqSelected(true);
  };
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={onClickLeftTab}>
          <View
            style={
              isReqSelected ? styles.buttonContainer : styles.selectedButton
            }
          >
            <Text>목록</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onClickRightTab}>
          <View
            style={
              isReqSelected ? styles.selectedButton : styles.buttonContainer
            }
          >
            <Text>신청</Text>
          </View>
        </TouchableOpacity>
      </View>
      {isReqSelected ? <FriendRequsetList /> : <FriendList />}
    </View>
  );
}

const FriendList = () => {
  return (
    <View style={styles.listContainer}>
      <Text> Friendsas List </Text>
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
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 10,
  },
  buttonContainer: {
    // marginHorizontal: 10,
    padding: 5,
    paddingHorizontal: 50,
    backgroundColor: "white",
    opacity: 0.5,
  },
  selectedButton: {
    // marginHorizontal: 10,
    padding: 5,
    paddingHorizontal: 50,
    borderBottomColor: "black",
    borderBottomWidth: 4,
    backgroundColor: "white",
  },
  listContainer: {
    marginHorizontal: 10,
    height: HEIGHT * (2 / 3),
    backgroundColor: "white",
  },
});
