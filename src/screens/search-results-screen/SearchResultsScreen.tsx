import React, { useState, useEffect } from "react";
import Animated from "react-native-reanimated";
import { View } from "react-native";
import type { StackScreenProps } from "@react-navigation/stack";

import { SearchInput } from "@local/components/search-input";
import { FlatTrackList } from "@local/components/flat-track-list";
import { EmptyListMessage } from "@local/components/empty-list-message";
import { SearchItem } from "./search-item";
import type { RPList } from "@local/routes/routes-params-list";

import artistsData from "@local/assets/data/artists";
import musicData from "@local/assets/data/music";

import { styles } from "./styles";

export const SearchResultsScreen = (props: StackScreenProps<RPList, "SearchResults">) => {
  const yOffset = new Animated.Value<number>(0);

  const [data, setData] = useState<any>({ list: [] });
  const [term, setTerm] = useState("");

  const handleCancelBtn = () => {
    setTerm("");
    props.navigation.goBack();
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

  const handleItemPress = (id: string, type: "song" | "artist") => {
    if (type === "artist") {
      props.navigation.navigate("Artist", { artistId: id });
    } else {
      props.navigation.navigate("Player", { songId: id });
    }
  };

  useEffect(() => {
    const results: any[] = [];

    if (term.length) {
      results.push(
        ...musicData.filter((track) => track.title.toLowerCase().includes(term.toLowerCase()))
      );

      if (results.length) {
        results.push(
          artistsData.find(
            (artist) => artist.artistName.toLowerCase() === results[0].artist[0].toLowerCase()
          )
        );
      } else {
        results.push(
          ...artistsData.filter((artist) =>
            artist.artistName.toLowerCase().includes(term.toLowerCase())
          )
        );
      }
    }

    setData({ list: results });
  }, [term]);

  return (
    <View style={styles.searchResultsContainer}>
      <SearchInput
        focusOnRender
        placeholder="Find in liked songs"
        onChangeText={(text) => setTerm(text)}
        onCancel={handleCancelBtn}
      />
      <FlatTrackList
        data={data}
        yOffset={yOffset}
        enableScroll={data.list.length > 0}
        contentContainerStyle={styles.searchResultsListContainer}
        ListEmptyComponent={renderEmptyListMessage()}
        renderItem={({ item }) => {
          if (item.title) {
            return (
              <SearchItem
                type="song"
                title={item.title}
                artists={item.artist}
                onItemPress={() => handleItemPress(item.id, "song")}
              />
            );
          } else {
            return (
              <SearchItem
                type="artist"
                title={item.artistName}
                artists={[item.artistName]}
                coverImg={item.cover}
                onItemPress={() => handleItemPress(item.id, "artist")}
              />
            );
          }
        }}
      />
    </View>
  );
};
