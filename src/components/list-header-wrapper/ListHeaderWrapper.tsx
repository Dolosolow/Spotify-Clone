import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import Animated from "react-native-reanimated";
import { Text } from "react-native";

import { getAnimatedNodes } from "./animatedStyles";
import { styles } from "./styles";

interface LHWProps {
  yOffset: Animated.Value<number>;
  title: string;
  subText: string;
  titleFontSize?: string;
}

export const ListHeaderWrapper = ({ yOffset, title, subText, titleFontSize }: LHWProps) => {
  const { textOpacity } = getAnimatedNodes(yOffset);

  return (
    <Animated.View style={[styles.headContentContainer, { opacity: textOpacity }]}>
      <Text
        adjustsFontSizeToFit
        style={{ ...styles.contentTitle, fontSize: EStyleSheet.value(titleFontSize) }}
      >
        {title}
      </Text>
      <Text adjustsFontSizeToFit style={styles.contentMiscText}>
        {subText}
      </Text>
    </Animated.View>
  );
};
