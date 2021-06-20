import Animated, { Extrapolate } from "react-native-reanimated";
import { Dimensions } from "react-native";

const { height } = Dimensions.get("screen");

export const getAnimatedNodes = (yOffset: Animated.Adaptable<number>) => {
  const textOpacity = Animated.interpolateNode(yOffset, {
    inputRange: [height * 0.13, height * 0.15],
    outputRange: [1, 0],
    extrapolateLeft: Extrapolate.CLAMP,
  });

  return { textOpacity };
};
