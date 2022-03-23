import React, { useRef, useState, useEffect } from "react";
import { View, FlatList, Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import type { StackScreenProps } from "@react-navigation/stack";
import type { ViewToken } from "react-native";

import { Card } from "./card";
import { MusicPlayer } from "./music-player";

import { useDataToRouteHandler } from "../../hooks/useDataToRouteHandler";
import { usePlayerControl } from "../../hooks/usePlayerControl";
import { setCurrentIndex } from "@local/store/actions";
import type { RPList } from "@local/routes/routes-params-list";
import type { Store } from "@local/store/redux_store";

const { width } = Dimensions.get("screen");

export const CarouselScreen = ({ route }: StackScreenProps<RPList, "Player">) => {
  const { currentIndex, filteredData } = useSelector((store: Store) => store);
  const dispatch = useDispatch();
  const player = usePlayerControl(route.params.qplayer);
  useDataToRouteHandler("track");

  const [showCtrls, setShowCtrls] = useState(false);

  const controllerRef = useRef<FlatList>(null);

  const onViewableItemsChange = useRef(
    async (info: { viewableItems: ViewToken[]; changed: ViewToken[] }) => {
      const { id, mp3 } = info.viewableItems[0].item;

      await player.playNextTrack(id, mp3);
    }
  );

  const handleControlVisiability = () => {
    setShowCtrls((prevState) => !prevState);
  };

  useEffect(() => {
    if (currentIndex !== null && currentIndex !== Number(route.params.songId)) {
      dispatch(setCurrentIndex(Number(route.params.songId)));
    }
  }, [filteredData]);

  return (
    <View style={{ backgroundColor: "#252525" }}>
      <FlatList
        horizontal
        ref={controllerRef}
        data={filteredData}
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
          numOfTracks={filteredData.length}
          rtPosition={player.rtPosition}
          trackDuration={player.trackDuration}
          track={filteredData[currentIndex]}
          showCtrls={showCtrls}
          handleAudioPlay={player.setPlayState}
        />
      )}
    </View>
  );
};
