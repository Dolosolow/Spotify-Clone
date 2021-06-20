import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { TabRoutes } from "./TabRoutes";
import { ModalRoutes } from "./ModalRoutes";

import type { RPList } from "@local/routes/routes-params-list";

const Stack = createStackNavigator<RPList>();

const RootRoutes = () => {
  return (
    <Stack.Navigator
      mode="modal"
      headerMode="none"
      initialRouteName={"Tabs"}
      screenOptions={{ cardStyle: { borderTopLeftRadius: 40, borderTopRightRadius: 40 } }}
    >
      <Stack.Screen name="Tabs" component={TabRoutes} />
      <Stack.Screen name="Modals" component={ModalRoutes} />
    </Stack.Navigator>
  );
};

export const Routes = () => {
  return (
    <NavigationContainer>
      <RootRoutes />
    </NavigationContainer>
  );
};
