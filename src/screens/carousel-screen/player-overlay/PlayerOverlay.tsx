import React from "react";
import { View, Image, Text } from "react-native";

import { styles } from "./styles";

interface POProps {
  track: any;
  showCtrls: boolean;
}

export const PlayerOverlay = ({ showCtrls, track }: POProps) => (
  <>
    {!showCtrls && (
      <View style={styles.overlayContainer}>
        <Image source={track.cover} style={styles.overlayCoverImg} />
        <Text style={styles.overlayText}>by {track.artist[0]}</Text>
      </View>
    )}
  </>
);
