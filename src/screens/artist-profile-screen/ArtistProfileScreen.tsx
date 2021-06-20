import React, { useEffect, useState } from "react";
import Animated from "react-native-reanimated";
import { easeGradient } from "react-native-easing-gradient";
import { View } from "react-native";
import type { StackScreenProps } from "@react-navigation/stack";

import { FlatTrackList } from "@local/components/flat-track-list";
import { GradientOverlay } from "@local/components/gradient-overlay";
import { HeaderCover } from "@local/components/header-cover";
import { ListHeaderWrapper } from "@local/components/list-header-wrapper";
import { ShuffleMiniButton } from "@local/components/shuffle-button";
import { TrackItem } from "@local/components/track-item";
import { Topbar } from "@local/components/top-bar";

import { RPList } from "@local/routes/routes-params-list";
import { styles } from "./styles";

import artistsData from "@local/assets/data/artists";
import musicData from "@local/assets/data/music";

export const ArtistProfileScreen = (props: StackScreenProps<RPList, "Artist">) => {
  const yOffset = new Animated.Value<number>(0);
  const [data, setData] = useState<any>({});

  const handleItemPress = async (id: string) => {
    props.navigation.navigate("Modals", { screen: "Player", params: { songId: id } });
  };

  const renderArtistProfile = () => {
    const { colors, locations } = easeGradient({
      colorStops: {
        0: {
          color: "transparent",
        },
        1: {
          color: "#121212",
        },
      },
    });

    return (
      <View style={styles.headComponentProfileContainer}>
        <GradientOverlay colors={colors} locations={locations} />
        <ListHeaderWrapper
          yOffset={yOffset}
          title={data && data.artistName}
          titleFontSize="3.6rem"
          subText="8,090,623 monthly listeners"
        />
        <ShuffleMiniButton />
      </View>
    );
  };

  useEffect(() => {
    const artist = artistsData.find((artist) => artist.id === props.route.params.artistId);
    let fetchedData;

    const filteredTracks = artist?.songs.map((trackId) => {
      const foundMusic = musicData.find((track) => track.id === trackId);
      if (foundMusic) return foundMusic;
    });

    fetchedData = Object.assign({ ...artist }, { list: filteredTracks });

    setData(fetchedData);
  }, []);

  return (
    <View style={{ backgroundColor: "#121212", flex: 1 }}>
      <HeaderCover isArtistProfile coverImg={data.cover} yOffset={yOffset} />
      <Topbar yOffset={yOffset} title={data.artistName} />
      <FlatTrackList
        yOffset={yOffset}
        data={data}
        ListHeaderComponent={renderArtistProfile()}
        renderItem={({ item }) => (
          <TrackItem track={item} onTrackPress={() => handleItemPress(item.id)} />
        )}
      />
    </View>
  );
};
