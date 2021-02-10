import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import {RankingScreen} from "../screens/RankingScreen";
import {HomeScreen} from "../screens/HomeScreen";
import FriendsScreen from "../screens/FriendsScreen";

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
          } else if (route.name === "Friends") {
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
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Friends" component={FriendsScreen} />
    </Tabs.Navigator>
  );
}
