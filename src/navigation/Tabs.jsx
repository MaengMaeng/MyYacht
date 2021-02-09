import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import {RankingScreen} from "../screens/RankingScreen";
import Home from "../screens/HomeScreen";
import Friend from "../screens/FriendScreen";

const Tabs = createBottomTabNavigator();

export default function () {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = Platform.OS === "ios" ? "ios-" : "md-";
          if (route.name === "Ranking") {
            iconName += "trophy";
          } else if (route.name === "Home") {
            iconName += "game-controller";
          } else if (route.name === "Friend") {
            iconName += "people";
          }
          return <Ionicons name={iconName} color={color} size={size} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "black",
        showLabel: false,
      }}
    >
      <Tabs.Screen name="Ranking" component={RankingScreen} />
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Friend" component={Friend} />
    </Tabs.Navigator>
  );
}
