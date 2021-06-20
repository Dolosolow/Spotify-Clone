import React from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  GestureResponderEvent,
  ImageSourcePropType,
} from "react-native";

import { styles } from "./styles";

interface GBProps {
  color: string;
  title: string;
  source: ImageSourcePropType;
}

export const GenreBox = (props: GBProps) => {
  const handleOnPress = (evt: GestureResponderEvent) => {
    console.log("genre box clicked");
    console.log(props);
  };

  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
      <View style={{ ...styles.boxContainer, backgroundColor: props.color }}>
        <Text style={styles.sectionText}>{props.title}</Text>
        <Image style={styles.sectionImg} source={props.source} />
      </View>
    </TouchableWithoutFeedback>
  );
};
