import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

import { HomeScreen } from "../screens/HomeScreen";
import { TabBar } from "./TabBar";

type RParams = {
  home: {
    hide: boolean;
  };
  settings: undefined;
  messages: undefined;
  trips: undefined;
  wishlists: undefined;
};

const Stack = createStackNavigator();
const StackBtm = createBottomTabNavigator<RParams>();

import ReAnimated from "react-native-reanimated";
const { Value } = ReAnimated;

const RootRoute = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="home">
      <Stack.Screen name="home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const RootTabRoute = () => {
  const yPosition = new Value<number>(0);

  return (
    <StackBtm.Navigator
      initialRouteName="home"
      tabBar={(props) => <TabBar {...props} yPosition={yPosition} />}
    >
      <StackBtm.Screen name="home">
        {(props) => <HomeScreen {...props} yPosition={yPosition} />}
      </StackBtm.Screen>
      <StackBtm.Screen name="settings" component={HomeScreen} />
      <StackBtm.Screen name="messages" component={HomeScreen} />
      <StackBtm.Screen name="trips" component={HomeScreen} />
      <StackBtm.Screen name="wishlists" component={HomeScreen} />
    </StackBtm.Navigator>
  );
};

export const Routes = () => {
  return (
    <NavigationContainer>
      {/* <RootRoute /> */}
      <RootTabRoute />
    </NavigationContainer>
  );
};

{
  /* <StackBtm.Navigator
      initialRouteName="home"
      tabBar={(props) => <TabBar {...props} yPosition={yPosition} />}
    >
      <StackBtm.Screen name="home" >
        {(props) => <HomeScreen {...props} yPosition={yPosition} />}
      </StackBtm.Screen>
      <StackBtm.Screen name="settings" component={HomeScreen} />
      <StackBtm.Screen name="messages" component={HomeScreen} />
      <StackBtm.Screen name="trips" component={HomeScreen} />
      <StackBtm.Screen name="wishlists" component={HomeScreen} />
    </StackBtm.Navigator> */
}
