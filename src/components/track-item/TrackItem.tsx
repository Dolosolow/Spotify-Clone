import React from "react";
import { View, Text, Pressable } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

import { Track } from "@local/types/index";
import { styles } from "./styles";

interface TIProps {
  track: Track;
  onTrackPress: () => void;
}

export const TrackItem = ({ track, onTrackPress }: TIProps) => (
  <Pressable onPress={onTrackPress}>
    <View style={styles.track}>
      <View>
        <Text adjustsFontSizeToFit style={styles.text}>
          {track.name}
        </Text>
        <Text adjustsFontSizeToFit style={styles.subText}>
          {track.artist.join(", ")}
        </Text>
      </View>
      <Entypo name="dots-three-vertical" size={15} color="#fff" />
    </View>
  </Pressable>
);
