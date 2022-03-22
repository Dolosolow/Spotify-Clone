import React, { useEffect, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { View, Text, TouchableWithoutFeedback } from "react-native";

import { RedirectButton } from "@local/components/redirect-button";

import { usePlayerControl } from "@local/hooks/usePlayerControl";
import type { Store } from "@local/store/redux_store";
import type { Track } from "@local/types/index";

import { styles } from "./styles";

export const QuickMusicPlayer = () => {
  const { currentIndex, isPlaying, data } = useSelector((store: Store) => store);
  const navigation = useNavigation();
  const player = usePlayerControl();

  const [track, setTrack] = useState<Track | null>(null);

  useEffect(() => {
    const foundTrack = data.find((track) => track.id === currentIndex?.toString());
    setTrack(foundTrack as Track);
  }, [currentIndex]);

  return currentIndex !== null && track ? (
    <View style={styles.playerContainer}>
      <RedirectButton chevronDirection="up" />
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate("Modals", {
            screen: "Player",
            params: { songId: currentIndex.toString(), qplayer: true },
          })
        }
      >
        <View style={styles.playerTrackDetails}>
          <Text style={styles.trackTitle}>{track.name}</Text>
          <Text style={styles.trackSubTitle}>{track.artist.join(", ")}</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={player.setPlayState}>
        <Ionicons
          name={isPlaying ? "pause-circle-outline" : "play-circle-outline"}
          size={45}
          color="#fff"
        />
      </TouchableWithoutFeedback>
    </View>
  ) : (
    <View />
  );
};
