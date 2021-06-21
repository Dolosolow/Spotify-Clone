import React, { useRef } from "react";
import { Video } from "expo-av";
import { GestureResponderEvent, Pressable } from "react-native";

import { styles } from "./styles";

interface CProps {
  vid: any;
  onPress: (event: GestureResponderEvent) => void;
}

export const Card = ({ vid, onPress }: CProps) => {
  const video = useRef<Video>(null);

  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Video
        ref={video}
        isLooping
        isMuted
        shouldPlay
        source={vid}
        resizeMode="cover"
        rate={1.0}
        style={styles.cardVideo}
      />
    </Pressable>
  );
};
