import Animated, { Extrapolate } from "react-native-reanimated";

export const getAnimatedNodes = (yOffset: Animated.Adaptable<number>) => {
  const topPosition = Animated.interpolateNode(yOffset, {
    inputRange: [0, 70],
    outputRange: [125, 47],
    extrapolateRight: Extrapolate.CLAMP,
  });

  return { topPosition };
};
