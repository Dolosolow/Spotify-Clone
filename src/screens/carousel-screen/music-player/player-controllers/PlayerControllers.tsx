import React, { useEffect, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { View, TouchableWithoutFeedback } from "react-native";
import { useSelector } from "react-redux";

import { Store } from "@local/store/redux_store";
import { styles } from "./styles";

interface PCProps {
  onPlayPausePress: () => void;
  onBackPress: () => void;
  onForwardPress: () => void;
}

export const PlayerControllers = (props: PCProps) => {
  const { isPlaying } = useSelector((state: Store) => state);

  return (
    <View style={styles.controllersContainer}>
      <TouchableWithoutFeedback style={styles.toggleLeftButton}>
        <View style={styles.toggleLeftButton}>
          <Ionicons name="shuffle" color="white" size={23} />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={props.onBackPress}>
        <Ionicons name="play-skip-back" color="white" size={30} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback style={{ marginHorizontal: 40 }} onPress={props.onPlayPausePress}>
        <View style={{ marginHorizontal: 40 }}>
          <Ionicons
            name={isPlaying ? "ios-pause-circle" : "ios-play-circle-sharp"}
            color="white"
            size={85}
            style={{ top: -30 }}
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={props.onForwardPress}>
        <Ionicons name="play-skip-forward" color="white" size={30} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View style={styles.toggleRightButton}>
          <Ionicons name="repeat" color="white" size={24} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
