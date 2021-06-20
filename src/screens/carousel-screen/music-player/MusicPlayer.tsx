import React, { useState } from "react";
import { View } from "react-native";
import type { FlatList } from "react-native";

import { PlayerControllers } from "./player-controllers";
import { TrackDetails } from "./track-details";
import { TrackTimedProgress } from "./track-timed-progress";

import { AudioPlayer } from "@local/utils/AudioPlayer";
import { styles } from "./styles";

interface MPProps {
  audioPlayer: AudioPlayer;
  controllerRef: React.RefObject<FlatList<any>>;
  currentIndex: number;
  track: any;
  rtPosition: number;
  numOfTracks: number;
  trackDuration: number;
  isPlaying: boolean;
  showCtrls: boolean;
  handleAudioPlay: () => Promise<void>;
}

export const MusicPlayer = (props: MPProps) => {
  const [playbackDir, setPlaybackDir] = useState<"F" | "R">("F");

  const handleControlPress = async ({ direction }: { direction: "F" | "R" }) => {
    let timer;

    clearTimeout(timer);

    if (direction === "R") {
      if (props.currentIndex > 0 && playbackDir === "R") {
        props.controllerRef.current?.scrollToIndex({ index: props.currentIndex - 1 });
      } else {
        await props.audioPlayer.setAudioPosition(0);
      }
    } else if (direction === "F" && props.currentIndex < props.numOfTracks - 1) {
      props.controllerRef.current?.scrollToIndex({ index: props.currentIndex + 1 });
    }

    setPlaybackDir(direction);

    timer = setTimeout(() => {
      setPlaybackDir("F");
    }, 1000);
  };

  return (
    <View
      style={[styles.btnContainer, { display: props.showCtrls ? "flex" : "none" }]}
      pointerEvents="box-none"
    >
      <TrackDetails track={props.track} />
      <TrackTimedProgress rtPosition={props.rtPosition} trackDuration={props.trackDuration} />
      <PlayerControllers
        isPlaying={props.isPlaying}
        onPlayPausePress={props.handleAudioPlay}
        onBackPress={() => handleControlPress({ direction: "R" })}
        onForwardPress={() => handleControlPress({ direction: "F" })}
      />
    </View>
  );
};
