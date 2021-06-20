import React, { useRef, useState, useEffect } from "react";
import { View, FlatList, Dimensions } from "react-native";
import type { StackScreenProps } from "@react-navigation/stack";
import type { GestureResponderEvent, ViewToken } from "react-native";

import { Card } from "./card";
import { MusicPlayer } from "./music-player";
import { PlayerOverlay } from "./player-overlay";

import { AudioPlayer } from "@local/utils/AudioPlayer";

import musicData from "@local/assets/data/music";
import type { RPList } from "@local/routes/routes-params-list";

const { width } = Dimensions.get("window");

interface CSProps {
  audioPlayer: AudioPlayer;
}

export const CarouselScreen = (props: StackScreenProps<RPList, "Player"> & CSProps) => {
  const { audioPlayer, route } = props;

  const [currentIndex, setCurrentIndex] = useState(Number(route.params.songId));
  const [showCtrls, setShowCtrls] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [rtPosition, setRtPosition] = useState(0);
  const [trackDuration, setTrackDuration] = useState(0);

  const controllerRef = useRef<FlatList>(null);

  const onViewableItemsChange = useRef(
    async (info: { viewableItems: ViewToken[]; changed: ViewToken[] }) => {
      const { id, mp3 } = musicData[info.viewableItems[0].index!];

      setIsPlaying(false);
      setCurrentIndex(Number(id));

      await audioPlayer.playNewAudio(mp3);
      const audioDuration = await audioPlayer.getAudioDuration();

      setTrackDuration(audioDuration);
      setIsPlaying(true);
    }
  );

  const handleControlVisiability = (event: GestureResponderEvent) => {
    setShowCtrls((prevState) => !prevState);
  };

  const handleAudioPlay = async () => {
    if (!isPlaying) {
      try {
        await audioPlayer.playAudioAfterPause();
        setIsPlaying(true);
      } catch (error) {
        console.log(error);
      }
    } else {
      await audioPlayer.pauseAudio();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    if ((rtPosition / trackDuration) * 100 === 100) {
      controllerRef.current?.scrollToIndex({ index: currentIndex + 1 });
    }
  }, [(rtPosition / trackDuration) * 100]);

  useEffect(() => {
    let timer: any;

    if (audioPlayer.audioPlayer._loaded) {
      const getPosition = async () => {
        const aPosition: any = await audioPlayer.getAudioPosition();
        setRtPosition(aPosition);
      };

      timer = setTimeout(() => {
        getPosition();
      }, 500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isPlaying, rtPosition]);

  return (
    <View style={{ backgroundColor: "#252525" }}>
      <FlatList
        ref={controllerRef}
        horizontal
        data={musicData}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <Card vid={item.vid} onPress={handleControlVisiability} />}
        snapToAlignment="center"
        decelerationRate="fast"
        overScrollMode="never"
        bounces={false}
        snapToInterval={width}
        initialScrollIndex={currentIndex}
        getItemLayout={(_, index) => {
          return { length: width, index, offset: width * index };
        }}
        onViewableItemsChanged={onViewableItemsChange.current}
        viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
      />
      <MusicPlayer
        audioPlayer={audioPlayer}
        controllerRef={controllerRef}
        currentIndex={currentIndex}
        numOfTracks={musicData.length}
        rtPosition={rtPosition}
        trackDuration={trackDuration}
        track={musicData[currentIndex]}
        showCtrls={showCtrls}
        isPlaying={isPlaying}
        handleAudioPlay={handleAudioPlay}
      />
      <PlayerOverlay track={musicData[currentIndex]} showCtrls={showCtrls} />
    </View>
  );
};
