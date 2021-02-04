import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Stack from "./src/navigation/Stack";

export default function App() {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
}
