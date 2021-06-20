import React from "react";
import Animated from "react-native-reanimated";
import { TouchableWithoutFeedback, View, Text } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import type { GestureResponderEvent } from "react-native";

import { getAnimatedNodes } from "./animatedStyles";
import { styles } from "./styles";

interface TSBProps {
  placeholder: string;
  yOffset: Animated.Value<number>;
  onSearchBtnPress: (evt: GestureResponderEvent) => void;
}

export const TopSearchButton = ({ yOffset, placeholder, onSearchBtnPress }: TSBProps) => {
  const { topPosition } = getAnimatedNodes(yOffset);

  return (
    <TouchableWithoutFeedback onPress={onSearchBtnPress}>
      <Animated.View style={[styles.searchBtnWrapper, { top: topPosition }]}>
        <View style={styles.searchBtn}>
          <AntDesign name="search1" size={23} color="#121212" />
          <Text style={styles.searchBtnText}>{placeholder}</Text>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
