import React, { useState } from "react";
import Animated from "react-native-reanimated";
import { View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import type { StackScreenProps } from "@react-navigation/stack";

import { SearchInput } from "@local/components/search-input";
import { FlatTrackList } from "@local/components/flat-track-list";
import { EmptyListMessage } from "@local/components/empty-list-message";
import { SearchItem } from "./search-item";

import { setCurrentIndex } from "@local/store/actions";
import type { RPList } from "@local/routes/routes-params-list";
import type { Store } from "@local/store/redux_store";
import type { AllData, Track } from "@local/types/index";

import { styles } from "./styles";

const yOffset = new Animated.Value<number>(0);
const player = AudioPlayer.getInstance();

import { useDataToRouteHandler } from "../../hooks/useDataToRouteHandler";
import { AudioPlayer } from "@local/utils/AudioPlayer";

export const SearchResultsScreen = (props: StackScreenProps<RPList, "SearchResults">) => {
  const { data } = useSelector((state: Store) => state);
  const dispatch = useDispatch();
  useDataToRouteHandler("all");

  const [term, setTerm] = useState("");
  const [allData, setAllData] = useState<AllData>([]);

  const handleCancelBtn = () => {
    setTerm("");
    setAllData([]);
    props.navigation.goBack();
  };

  const handleItemPress = async (track: any, type: "song" | "artist") => {
    if (type === "artist") {
      props.navigation.navigate("Artist", { artistId: track.id });
    } else {
      dispatch(setCurrentIndex(Number(track.id)));
      await player.playNewAudio(track.mp3);
    }
  };

  const renderEmptyListMessage = () => {
    if (term.trim().length === 0) {
      return (
        <EmptyListMessage
          headline="Play what you love"
          subText="Search for artists, songs, podcasts and more."
        />
      );
    } else {
      return (
        <EmptyListMessage
          headline={`No results found for "${term}"`}
          subText="Check the spelling, or try different keywords."
        />
      );
    }
  };

  const handleTermSearch = (text: string) => {
    let filteredData = data;
    let filteredTempData = [];

    filteredTempData = data.filter((item) => {
      if (item.type === "artist") {
        return item.name.toLowerCase().includes(text.toLowerCase());
      }
    });

    filteredData = filteredTempData;

    filteredTempData = data.filter((item) => {
      if (item.type === "track") {
        return (item as Track).artist.join(" ").toLowerCase().includes(text.toLowerCase());
      }
    });

    filteredData.push(...filteredTempData);

    setTerm(text);
    setAllData(filteredData);
  };

  return (
    <View style={styles.searchResultsContainer}>
      <SearchInput
        focusOnRender
        placeholder="Find in liked songs"
        onChangeText={handleTermSearch}
        onCancel={handleCancelBtn}
      />
      <FlatTrackList
        data={{ list: allData as AllData }}
        yOffset={yOffset}
        enableScroll={allData.length > 9}
        contentContainerStyle={styles.searchResultsListContainer}
        ListEmptyComponent={renderEmptyListMessage()}
        renderItem={({ item }) => {
          if (item.type === "track") {
            return (
              <View style={{ flexDirection: "row" }}>
                <SearchItem
                  type="song"
                  title={item.name}
                  artists={item.artist}
                  coverImg={item.cover}
                  onItemPress={() => handleItemPress(item, "song")}
                />
              </View>
            );
          } else {
            return (
              <View style={{ flexDirection: "row" }}>
                <SearchItem
                  type="artist"
                  title={item.name}
                  artists={[item.name]}
                  coverImg={item.cover}
                  onItemPress={() => handleItemPress(item, "artist")}
                />
              </View>
            );
          }
        }}
      />
    </View>
  );
};
