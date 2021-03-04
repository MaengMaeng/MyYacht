import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { userInfo } from "../../dummies/userinfo_dummy";
import HomeScreenPresenter from "./HomeScreenPresenter";

export default function () {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const navigateMatching = () => {
    navigation.push("Play");
  };

  return (
    <HomeScreenPresenter
      {...{ userInfo, modalVisible, setModalVisible, navigateMatching }}
    />
  );
}
