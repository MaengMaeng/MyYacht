import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ranking from "../screens/RankingScreen";
import Home from "../screens/HomeScreen";
import Friend from "../screens/FriendScreen";

const Tabs = createBottomTabNavigator();

export default function () {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Ranking" component={Ranking} />
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Friend" component={Friend} />
    </Tabs.Navigator>
  );
}
