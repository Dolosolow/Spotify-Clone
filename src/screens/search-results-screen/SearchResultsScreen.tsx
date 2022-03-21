import React, { useState, useEffect } from "react";
import Animated from "react-native-reanimated";
import { View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import type { StackScreenProps } from "@react-navigation/stack";

import { SearchInput } from "@local/components/search-input";
import { FlatTrackList } from "@local/components/flat-track-list";
import { EmptyListMessage } from "@local/components/empty-list-message";
import { SearchItem } from "./search-item";

import { getData } from "@local/store/actions";
import type { RPList } from "@local/routes/routes-params-list";
import type { Store } from "@local/store/redux_store";
import type { AllData } from "@local/types/index";

import { styles } from "./styles";

const yOffset = new Animated.Value<number>(0);

export const SearchResultsScreen = (props: StackScreenProps<RPList, "SearchResults">) => {
  const { data } = useSelector((state: Store) => state);
  const dispatch = useDispatch();

  const [term, setTerm] = useState("");
  const [allData, setAllData] = useState<AllData>([]);
  const [filteredData, setFilteredData] = useState<any>([]);

  const handleCancelBtn = () => {
    setTerm("");
    props.navigation.goBack();
  };

  const handleItemPress = (id: string, type: "song" | "artist") => {
    if (type === "artist") {
      props.navigation.navigate("Artist", { artistId: id });
    } else {
      props.navigation.navigate("Player", { songId: id, qplayer: false });
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

  useEffect(() => {
    dispatch(getData());
  }, []);

  useEffect(() => {
    setAllData(data);
  }, [data]);

  useEffect(() => {
    const results: any[] = [];

    if (term.length) {
      results.push(
        ...allData.filter((track) => track.name.toLowerCase().includes(term.toLowerCase()))
      );
    }

    setFilteredData(results);
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
        data={{ list: filteredData as AllData }}
        yOffset={yOffset}
        enableScroll={filteredData.length > 0}
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
                  onItemPress={() => handleItemPress(item.id, "song")}
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
                  onItemPress={() => handleItemPress(item.id, "artist")}
                />
              </View>
            );
          }
        }}
      />
    </View>
  );
};
