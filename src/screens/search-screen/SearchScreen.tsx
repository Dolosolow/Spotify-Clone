import React from "react";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native";
import type { GestureResponderEvent } from "react-native";
import type { StackScreenProps } from "@react-navigation/stack";

import { ScreenContainer } from "@local/components/screen-container";
import { TopSearchButton } from "./top-search-button";
import { GenreChannelBlocks } from "./genre-channel-blocks";

import playlistData from "@local/assets/data/playlist";
import type { RPList } from "@local/routes/routes-params-list";

export const SearchScreen = (props: StackScreenProps<RPList, "Search">) => {
  const yOffset = new Animated.Value<number>(0);

  const handleSearchBtnPress = (evt: GestureResponderEvent) => {
    props.navigation.navigate("SearchResults");
  };

  return (
    <ScreenContainer>
      <SafeAreaView>
        <TopSearchButton
          placeholder="Artists, songs, or podcasts"
          yOffset={yOffset}
          onSearchBtnPress={handleSearchBtnPress}
        />
        <GenreChannelBlocks yOffset={yOffset} playlistData={playlistData} />
      </SafeAreaView>
    </ScreenContainer>
  );
};
