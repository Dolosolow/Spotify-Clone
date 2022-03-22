import React, { useState, useEffect } from "react";
import { View } from "react-native";
import type { FlatList } from "react-native";

import { TopbarNav } from "@local/components/top-bar-nav";
import { PlayerControllers } from "./player-controllers";
import { TrackDetails } from "./track-details";
import { TrackTimedProgress } from "./track-timed-progress";

import { AudioPlayer } from "@local/utils/AudioPlayer";

import { styles } from "./styles";

import { OverlayArtistCard } from "./overlay-artist-card";

interface MPProps {
  controllerRef: React.RefObject<FlatList<any>>;
  currentIndex: number;
  track: any;
  rtPosition: number;
  numOfTracks: number;
  trackDuration: number;
  showCtrls: boolean;
  handleAudioPlay: () => Promise<void>;
}

const audioPlayer = AudioPlayer.getInstance();

export const MusicPlayer = (props: MPProps) => {
  const [playbackDir, setPlaybackDir] = useState<"F" | "R">("F");

  const handleControlPress = async ({ direction }: { direction: "F" | "R" }) => {
    let timer;

    clearTimeout(timer);

    if (direction === "R") {
      if (props.currentIndex > 0 && playbackDir === "R") {
        props.controllerRef.current?.scrollToIndex({ index: props.currentIndex - 1 });
      } else {
        await audioPlayer.pauseAudio();
        await audioPlayer.setAudioPosition(0);
        await audioPlayer.playAudio();
      }
    } else if (direction === "F" && props.currentIndex < props.numOfTracks - 1) {
      props.controllerRef.current?.scrollToIndex({ index: props.currentIndex + 1 });
    }

    setPlaybackDir(direction);

    timer = setTimeout(() => {
      setPlaybackDir("F");
    }, 1000);
  };

  useEffect(() => {
    if ((props.rtPosition / props.trackDuration) * 100 === 100 && props.currentIndex !== null) {
      props.controllerRef.current?.scrollToIndex({ index: props.currentIndex + 1 });
    }
  }, [(props.rtPosition / props.trackDuration) * 100]);

  return (
    <>
      <View
        style={[styles.btnContainer, { display: props.showCtrls ? "flex" : "none" }]}
        pointerEvents="box-none"
      >
        <TopbarNav />
        <View style={styles.playerDetailsContainer}>
          <TrackDetails track={props.track} />
          <TrackTimedProgress rtPosition={props.rtPosition} trackDuration={props.trackDuration} />
          <PlayerControllers
            onPlayPausePress={props.handleAudioPlay}
            onBackPress={() => handleControlPress({ direction: "R" })}
            onForwardPress={() => handleControlPress({ direction: "F" })}
          />
        </View>
      </View>
      {!props.showCtrls && <OverlayArtistCard track={props.track} />}
    </>
  );
};
