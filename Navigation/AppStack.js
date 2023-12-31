import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigation from "../screens/TabNavigation/TabNavigation";

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={TabNavigation} />
    </Stack.Navigator>
  );
};
