import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Tabs from "./Tabs";
import PlayScreen from "../screens/PlayScreen/PlayScreen";
import { Matching } from "../components/Matching/Matching";

const Stack = createStackNavigator();

export default function () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyYatch" component={Tabs} />
      <Stack.Screen
        name="Matching"
        component={Matching}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Play"
        component={PlayScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
