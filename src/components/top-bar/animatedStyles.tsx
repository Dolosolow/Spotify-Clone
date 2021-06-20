import Animated, { Extrapolate } from "react-native-reanimated";

export const getAnimatedNodes = (yOffset: Animated.Adaptable<number>) => {
  const overlayOpacity = Animated.interpolateNode(yOffset, {
    inputRange: [160, 180],
    outputRange: [0, 1],
    extrapolateLeft: Extrapolate.CLAMP,
  });

  return { overlayOpacity };
};
