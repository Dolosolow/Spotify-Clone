import React from "react";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Foundation from "react-native-vector-icons/Foundation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { QuickMusicPlayer } from "@local/components/quick-music-player";
import { StackRoutes } from "./StackRoutes";

import type { RPList } from "@local/routes/routes-params-list";

const StackTabs = createBottomTabNavigator<RPList>();

export const TabRoutes = () => {
  return (
    <>
      <StackTabs.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          style: { backgroundColor: "#292929", borderTopWidth: 0, paddingTop: 10 },
          activeTintColor: "white",
          inactiveTintColor: "#ebebeb6c",
        }}
      >
        <StackTabs.Screen
          name="Home"
          component={StackRoutes}
          options={{
            tabBarIcon: ({ color }) => <Foundation name="home" color={color} size={25} />,
          }}
        />
        <StackTabs.Screen
          name="Search"
          component={StackRoutes}
          options={{ tabBarIcon: ({ color }) => <Feather name="search" color={color} size={25} /> }}
        />
        <StackTabs.Screen
          name="Library"
          component={StackRoutes}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="grip-lines-vertical" color={color} size={25} />
            ),
          }}
        />
      </StackTabs.Navigator>
      <QuickMusicPlayer />
    </>
  );
};
