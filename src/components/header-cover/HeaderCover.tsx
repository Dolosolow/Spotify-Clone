import React from "react";
import Animated from "react-native-reanimated";
import { View, ImageURISource } from "react-native";

import { getAnimatedNodes } from "./animatedStyles";
import { styles } from "./styles";

interface HCProps {
  yOffset: Animated.Value<number>;
  isArtistProfile?: boolean;
  coverImg?: ImageURISource;
}

export const HeaderCover = ({ yOffset, isArtistProfile = false, coverImg = {} }: HCProps) => {
  const { opacity, scale } = getAnimatedNodes(yOffset);

  return (
    <Animated.View style={[styles.headerCover, { transform: [{ scale }] }]}>
      {isArtistProfile ? (
        <>
          <View style={styles.headerImgCoverOverlay} />
          <Animated.Image source={coverImg} style={[styles.headerCoverImg, { opacity }]} />
        </>
      ) : (
        <View style={styles.headerCoverOverlay} />
      )}
    </Animated.View>
  );
};
