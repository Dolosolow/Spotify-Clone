import React, { useEffect } from "react";
import Animated from "react-native-reanimated";
import { useSelector, useDispatch } from "react-redux";
import { View } from "react-native";
import type { StackScreenProps } from "@react-navigation/stack";

import { PlaylistScreen } from "./playlist-screen";

import { AudioPlayer } from "@local/utils/AudioPlayer";
import { getData } from "@local/store/actions";
import type { RPList } from "@local/routes/routes-params-list";
import type { Store } from "@local/store/redux_store";
import type { Track } from "@local/types/index";

import { styles } from "./styles";
interface LSProps {
  audioPlayer: AudioPlayer;
}

export const LibraryScreen = ({ navigation }: StackScreenProps<RPList, "Home"> & LSProps) => {
  const yOffset = new Animated.Value<number>(0);
  const { data } = useSelector((state: Store) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData("track"));
  }, []);

  return (
    <View style={styles.container}>
      <PlaylistScreen yOffset={yOffset} navigation={navigation} data={data as Track[]} />
    </View>
  );
};
