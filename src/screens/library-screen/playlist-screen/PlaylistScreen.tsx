import React, { useEffect, useState } from "react";
import Animated from "react-native-reanimated";
import { easeGradient } from "react-native-easing-gradient";
import { View, Dimensions } from "react-native";
import type { StackNavigationProp } from "@react-navigation/stack";

import { EmptyListMessage } from "@local/components/empty-list-message";
import { FlatTrackList } from "@local/components/flat-track-list";
import { GradientOverlay } from "@local/components/gradient-overlay";
import { HeaderCover } from "@local/components/header-cover";
import { ListHeaderWrapper } from "@local/components/list-header-wrapper";
import { ShuffleButton } from "@local/components/shuffle-button";
import { SearchInput } from "@local/components/search-input";
import { Topbar } from "@local/components/top-bar";
import { TrackItem } from "@local/components/track-item";

import type { RPList } from "@local/routes/routes-params-list";
import type { Track } from "@local/types/index";

import { styles } from "./styles";

interface TLProps {
  data: Track[];
  yOffset: Animated.Value<number>;
  navigation: StackNavigationProp<RPList, "Home">;
}

const { height } = Dimensions.get("screen");

export const PlaylistScreen = ({ data, navigation, yOffset }: TLProps) => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [filteredSearch, setFilteredSearch] = useState("");

  useEffect(() => {
    if (!tracks.length && data.length) {
      setTracks(data);
    }
  }, [data]);

  const handleItemPress = async (id: string) => {
    navigation.navigate("Modals", { screen: "Player", params: { songId: id } });
  };

  const handleTermSearch = (text: string) => {
    let filteredTracks = data;

    filteredTracks = filteredTracks.filter((track) =>
      track.name.toLowerCase().includes(text.toLowerCase())
    );

    if (!filteredTracks.length) {
      filteredTracks = data.filter((track) =>
        track.artist.join(" ").toLowerCase().includes(text.toLowerCase())
      );
    }

    setFilteredSearch(text);
    setTracks(filteredTracks);
  };

  const renderPlaylistItems = () => {
    const { colors, locations } = easeGradient({
      colorStops: {
        0: {
          color: "#305ae2",
        },
        1: {
          color: "#121212",
        },
      },
    });

    return (
      <View style={styles.headComponentContainer}>
        <GradientOverlay colors={colors} locations={locations} />
        <ListHeaderWrapper yOffset={yOffset} title="Liked Songs" subText={`${data.length} songs`} />
        <ShuffleButton />
      </View>
    );
  };

  return (
    <>
      <HeaderCover yOffset={yOffset} />
      <Topbar yOffset={yOffset} title="Liked Songs" />
      <SearchInput
        yOffset={yOffset}
        placeholder="Find in liked songs"
        onChangeText={handleTermSearch}
      />
      <FlatTrackList
        data={{ list: tracks }}
        yOffset={yOffset}
        contentContainerStyle={{ minHeight: height, backgroundColor: "#121212" }}
        ListEmptyComponent={
          <EmptyListMessage
            headline={`No results found for "${filteredSearch}"`}
            subText="Check the spelling, or try different keywords."
          />
        }
        ListHeaderComponent={renderPlaylistItems()}
        renderItem={({ item }) => (
          <TrackItem track={item} onTrackPress={() => handleItemPress(item.id)} />
        )}
      />
    </>
  );
};
