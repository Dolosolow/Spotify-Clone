import React, { useEffect, useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, TouchableWithoutFeedback } from "react-native";

import { AudioPlayer } from "@local/utils/AudioPlayer";
import { pausePlayAudio } from "@local/store/actions";
import type { Store } from "@local/store/redux_store";
import type { Track } from "@local/types/index";

import { styles } from "./styles";

const audioPlayer = AudioPlayer.getInstance();

export const QuickMusicPlayer = () => {
  const { currentIndex, isPlaying, data } = useSelector((store: Store) => store);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [track, setTrack] = useState<Track | null>(null);

  const handlePlayingState = async () => {
    if (isPlaying) {
      dispatch(pausePlayAudio(false));
      await audioPlayer.pauseAudio();
    } else {
      dispatch(pausePlayAudio(true));
      await audioPlayer.playAudio(true);
    }
  };

  useEffect(() => {
    const foundTrack = data.find((track) => track.id === currentIndex?.toString());
    setTrack(foundTrack as Track);
  }, [currentIndex]);

  return currentIndex && track ? (
    <View style={styles.playerContainer}>
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate("Modals", {
            screen: "Player",
            params: { songId: currentIndex.toString(), qplayer: true },
          })
        }
      >
        <AntDesign name="up" size={20} color="#fff" />
      </TouchableWithoutFeedback>
      <View style={styles.playerTrackDetails}>
        <Text style={styles.trackTitle}>{track.name}</Text>
        <Text style={styles.trackSubTitle}>{track.artist.join(", ")}</Text>
      </View>
      <TouchableWithoutFeedback onPress={handlePlayingState}>
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
