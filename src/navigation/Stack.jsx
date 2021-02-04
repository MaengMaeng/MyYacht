import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Tabs from "./Tabs";

const Stack = createStackNavigator();

export default function () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyYatch" component={Tabs} />
    </Stack.Navigator>
  );
}
