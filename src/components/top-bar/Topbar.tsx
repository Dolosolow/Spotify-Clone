import React from "react";
import Animated from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { Text } from "react-native";

import { getAnimatedNodes } from "./animatedStyles";
import { styles, colors, locations } from "./styles";

interface TBProps {
  title: string;
  yOffset: Animated.Value<number>;
}

export const Topbar = ({ yOffset, title }: TBProps) => {
  const { overlayOpacity } = getAnimatedNodes(yOffset);

  return (
    <Animated.View style={[styles.topbar, { opacity: overlayOpacity }]}>
      <LinearGradient colors={colors} locations={locations} style={styles.gradientWrapper} />
      <Text adjustsFontSizeToFit style={styles.topbarTitle}>
        {title}
      </Text>
    </Animated.View>
  );
};
