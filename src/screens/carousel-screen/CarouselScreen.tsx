import React, { useRef, useState, useEffect } from "react";
import { View, FlatList, Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import type { StackScreenProps } from "@react-navigation/stack";
import type { ViewToken } from "react-native";

import { Card } from "./card";
import { MusicPlayer } from "./music-player";

import { AudioPlayer } from "@local/utils/AudioPlayer";
import { setCurrentIndex, pausePlayAudio } from "@local/store/actions";
import type { RPList } from "@local/routes/routes-params-list";
import type { Store } from "@local/store/redux_store";
import type { Track } from "@local/types/index";

const { width } = Dimensions.get("screen");

const audioPlayer = AudioPlayer.getInstance();

export const CarouselScreen = ({ route }: StackScreenProps<RPList, "Player">) => {
  const { currentIndex, isPlaying, data } = useSelector((store: Store) => store);
  const dispatch = useDispatch();

  const [showCtrls, setShowCtrls] = useState(false);
  const [rtPosition, setRtPosition] = useState(0);
  const [trackDuration, setTrackDuration] = useState(0);

  const controllerRef = useRef<FlatList>(null);

  const onViewableItemsChange = useRef(
    async (info: { viewableItems: ViewToken[]; changed: ViewToken[] }) => {
      const { id, mp3 } = data[info.viewableItems[0].index!] as Track;

      if (currentIndex !== Number(id)) {
        await audioPlayer.playNewAudio(mp3);

        const audioDuration = await audioPlayer.getAudioDuration();

        dispatch(pausePlayAudio(true));
        dispatch(setCurrentIndex(Number(id)));
        setTrackDuration(audioDuration);
      }
    }
  );

  const handlePlayingState = async () => {
    if (isPlaying) {
      dispatch(pausePlayAudio(false));
      await audioPlayer.pauseAudio();
    } else {
      dispatch(pausePlayAudio(true));
      await audioPlayer.playAudio(true);
    }
  };

  const handleControlVisiability = () => {
    setShowCtrls((prevState) => !prevState);
  };

  useEffect(() => {
    if (Number(route.params.songId) !== currentIndex) {
      dispatch(setCurrentIndex(Number(route.params.songId)));
    }
  }, [data]);

  useEffect(() => {
    if (audioPlayer.audioPlayer._loaded) {
      let timer: any;

      const getPosition = async () => {
        const audioPosition = await audioPlayer.getAudioPosition();
        setRtPosition(audioPosition);
      };

      const getDuration = async () => {
        const audioDuration = await audioPlayer.getAudioDuration();
        setTrackDuration(audioDuration);
      };

      timer = setTimeout(() => {
        if (trackDuration === 0) {
          getDuration();
        }

        getPosition();
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isPlaying, rtPosition, route.params.qplayer]);

  return (
    <View style={{ backgroundColor: "#252525" }}>
      <FlatList
        horizontal
        ref={controllerRef}
        data={data}
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
      {currentIndex !== null && (
        <MusicPlayer
          controllerRef={controllerRef}
          currentIndex={currentIndex}
          numOfTracks={data.length}
          rtPosition={rtPosition}
          trackDuration={trackDuration}
          track={data[currentIndex]}
          showCtrls={showCtrls}
          handleAudioPlay={handlePlayingState}
        />
      )}
    </View>
  );
};
