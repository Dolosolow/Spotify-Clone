import Animated, { Extrapolate } from "react-native-reanimated";

export const getAnimatedNodes = (yOffset: Animated.Adaptable<number>) => {
  const scale = Animated.interpolateNode(yOffset, {
    inputRange: [-30, 0],
    outputRange: [1.05, 1],
    extrapolateRight: Extrapolate.CLAMP,
  });

  const opacity = Animated.interpolateNode(yOffset, {
    inputRange: [50, 200],
    outputRange: [1, 0],
    extrapolateLeft: Extrapolate.CLAMP,
  });

  return { scale, opacity };
};
