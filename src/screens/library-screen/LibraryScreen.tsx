import React from "react";
import { View } from "react-native";
import Animated from "react-native-reanimated";
import type { StackScreenProps } from "@react-navigation/stack";

import { PlaylistScreen } from "./playlist-screen";

import { AudioPlayer } from "@local/utils/AudioPlayer";
import type { RPList } from "@local/routes/routes-params-list";

import { styles } from "./styles";

import musicData from "@local/assets/data/music";

interface LSProps {
  audioPlayer: AudioPlayer;
}

export const LibraryScreen = ({ navigation }: StackScreenProps<RPList, "Home"> & LSProps) => {
  const yOffset = new Animated.Value<number>(0);

  return (
    <View style={styles.container}>
      <PlaylistScreen yOffset={yOffset} navigation={navigation} data={musicData} />
    </View>
  );
};
