import React from "react";
import { View, Image, Text } from "react-native";

import type { Track } from "@local/types/index";

import { styles } from "./styles";

export const OverlayArtistCard = (props: { track: Track }) => {
  return (
    <View style={styles.overlayContainer}>
      <Image source={props.track.artistCover} style={styles.overlayCoverImg} />
      <Text style={styles.overlayText}>by {props.track.artist[0]}</Text>
    </View>
  );
};
