import Animated, { Extrapolate } from "react-native-reanimated";

export const getAnimatedNodes = (yOffset: Animated.Adaptable<number>) => {
  const searchOpacity = Animated.interpolateNode(yOffset, {
    inputRange: [1, 50],
    outputRange: [1, 0],
    extrapolateLeft: Extrapolate.CLAMP,
  });

  const topPosition = Animated.interpolateNode(yOffset, {
    inputRange: [1, 50],
    outputRange: [110, 50],
    extrapolateLeft: Extrapolate.CLAMP,
  });

  return { searchOpacity, topPosition };
};
