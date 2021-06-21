import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { CarouselScreen } from "@local/screens/carousel-screen";

import type { RPList } from "@local/routes/routes-params-list";

const Stack = createStackNavigator<RPList>();

export const ModalRoutes = () => {
  return (
    <Stack.Navigator
      mode="modal"
      headerMode="none"
      screenOptions={{
        cardStyle: { borderTopLeftRadius: 40, borderTopRightRadius: 40 },
        gestureResponseDistance: { vertical: 1000, horizontal: 1000 },
      }}
    >
      <Stack.Screen name="Player">{(props) => <CarouselScreen {...props} />}</Stack.Screen>
    </Stack.Navigator>
  );
};
