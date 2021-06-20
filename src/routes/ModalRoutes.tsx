import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { CarouselScreen } from "@local/screens/carousel-screen";

import { AudioPlayer } from "@local/utils/AudioPlayer";
import type { RPList } from "@local/routes/routes-params-list";

const Stack = createStackNavigator<RPList>();

const audioPlayer = new AudioPlayer();

export const ModalRoutes = () => {
  return (
    <Stack.Navigator
      mode="modal"
      headerMode="none"
      screenOptions={{ cardStyle: { borderTopLeftRadius: 40, borderTopRightRadius: 40 } }}
    >
      <Stack.Screen name="Player">
        {(props) => <CarouselScreen {...props} audioPlayer={audioPlayer} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
