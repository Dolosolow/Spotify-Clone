import React from "react";
import FeatherDesign from "react-native-vector-icons/Feather";
import { ScrollView, View } from "react-native";
import type Animated from "react-native-reanimated";

import { NamedRow } from "@local/components/named-row";
import { GenreBox } from "@local/components/genre-box";

import { getMostPlayed } from "@local/utils/getMostPlayed";
import type { Playlist } from "@local/types/index";
import { styles } from "./styles";

interface GCBProps {
  playlistData: Playlist[];
  yOffset: Animated.Value<number>;
}

export const GenreChannelBlocks = ({ yOffset, playlistData }: GCBProps) => {
  const renderMostPlayed = (listLength: number) => {
    const mostPlayed = getMostPlayed(playlistData, "played", listLength);
    return mostPlayed;
  };

  const renderPlayLists = (filtered: boolean = false) => {
    const list = filtered ? renderMostPlayed(2) : playlistData;

    return (
      <View style={styles.blockRowWrapper}>
        {list.map((playlist, idx) => (
          <GenreBox
            key={idx}
            color={filtered ? playlistData[playlist.idx].color : playlist.color}
            title={filtered ? playlistData[playlist.idx].name : playlist.name}
            source={filtered ? playlistData[playlist.idx].cover : playlist.cover}
          />
        ))}
      </View>
    );
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      onScroll={({ nativeEvent }) => {
        yOffset.setValue(nativeEvent.contentOffset.y);
      }}
    >
      <NamedRow
        title="Search"
        containerStyles={{ paddingTop: 30 }}
        titleRowComponents={
          <View style={styles.searchToolsContainer}>
            <FeatherDesign name="mic" size={28} color="#fff" />
            <FeatherDesign name="camera" size={28} color="#fff" />
          </View>
        }
        rowComponents={<View style={styles.searchBtnFiller} />}
      />
      <NamedRow title="Your top genres" titleSize="sm" rowComponents={renderPlayLists(true)} />
      <NamedRow title="Browse all" titleSize="sm" rowComponents={renderPlayLists()} />
    </ScrollView>
  );
};
