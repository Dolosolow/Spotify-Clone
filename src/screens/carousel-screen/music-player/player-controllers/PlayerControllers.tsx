import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { View, TouchableOpacity } from "react-native";

import { styles } from "./styles";

interface PCProps {
  isPlaying: boolean;
  onPlayPausePress: () => void;
  onBackPress: () => void;
  onForwardPress: () => void;
}

export const PlayerControllers = (props: PCProps) => (
  <View style={styles.controllersContainer}>
    <TouchableOpacity style={styles.toggleLeftButton}>
      <Ionicons name="shuffle" color="white" size={23} />
    </TouchableOpacity>
    <TouchableOpacity onPress={props.onBackPress}>
      <Ionicons name="play-skip-back" color="white" size={30} />
    </TouchableOpacity>
    <TouchableOpacity style={{ marginHorizontal: 40 }} onPress={props.onPlayPausePress}>
      <Ionicons
        name={props.isPlaying ? "ios-pause-circle" : "ios-play-circle-sharp"}
        color="white"
        size={85}
        style={{ top: -30 }}
      />
    </TouchableOpacity>
    <TouchableOpacity onPress={props.onForwardPress}>
      <Ionicons name="play-skip-forward" color="white" size={30} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.toggleRightButton}>
      <Ionicons name="repeat" color="white" size={24} />
    </TouchableOpacity>
  </View>
);
