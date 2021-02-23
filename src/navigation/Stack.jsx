import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Tabs from "./Tabs";
import PlayScreen from "../screens/PlayScreen";

const Stack = createStackNavigator();

export default function () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyYatch" component={Tabs} />
      <Stack.Screen
        name="Play"
        component={PlayScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
