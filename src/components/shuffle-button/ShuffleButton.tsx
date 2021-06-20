import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { View, Text, Pressable } from "react-native";

import { styles } from "./styles";

export const ShuffleMiniButton = () => {
  return (
    <Pressable style={styles.shuffleMiniButton}>
      <Ionicons name="ios-play-circle-sharp" size={70} color="#1db954" />
    </Pressable>
  );
};

export const ShuffleButton = () => {
  return (
    <View style={styles.shuffleButton}>
      <Text adjustsFontSizeToFit style={styles.shuffleBtnText}>
        Shuffle Play
      </Text>
    </View>
  );
};
