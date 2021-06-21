import React, { useEffect, useState } from "react";
import Animated from "react-native-reanimated";
import { easeGradient } from "react-native-easing-gradient";
import { useSelector, useDispatch } from "react-redux";
import { View } from "react-native";
import type { StackScreenProps } from "@react-navigation/stack";

import { FlatTrackList } from "@local/components/flat-track-list";
import { GradientOverlay } from "@local/components/gradient-overlay";
import { HeaderCover } from "@local/components/header-cover";
import { ListHeaderWrapper } from "@local/components/list-header-wrapper";
import { ShuffleMiniButton } from "@local/components/shuffle-button";
import { TrackItem } from "@local/components/track-item";
import { Topbar } from "@local/components/top-bar";

import { getArtist } from "@local/store/actions";
import type { Store } from "@local/store/redux_store";
import type { RPList } from "@local/routes/routes-params-list";
import type { Artist, Track } from "@local/types/index";

import { styles } from "./styles";

export const ArtistProfileScreen = (props: StackScreenProps<RPList, "Artist">) => {
  const yOffset = new Animated.Value<number>(0);

  const { data: artistData } = useSelector((state: Store) => state);
  const [data, setData] = useState<Artist | null>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArtist(props.route.params.artistId));
  }, []);

  useEffect(() => {
    if (artistData[0].id === props.route.params.artistId) {
      setData(artistData[0] as Artist);
    }
  }, [artistData]);

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

    if (data) {
      return (
        <View style={styles.headComponentProfileContainer}>
          <GradientOverlay colors={colors} locations={locations} />
          <ListHeaderWrapper
            yOffset={yOffset}
            title={data.name}
            titleFontSize="3.6rem"
            subText="8,090,623 monthly listeners"
          />
          <ShuffleMiniButton />
        </View>
      );
    }
  };

  return (
    <View style={{ backgroundColor: "#121212", flex: 1 }}>
      <HeaderCover isArtistProfile coverImg={data?.cover} yOffset={yOffset} />
      <Topbar yOffset={yOffset} title={data?.name || ""} />
      <FlatTrackList
        yOffset={yOffset}
        data={{ list: data?.songs as Track[] }}
        ListHeaderComponent={renderArtistProfile()}
        renderItem={({ item }) => (
          <TrackItem track={item} onTrackPress={() => handleItemPress(item.id)} />
        )}
      />
    </View>
  );
};
