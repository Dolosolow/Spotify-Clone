import Animated from "react-native-reanimated";

export const getAnimatedNodes = (yOffset: Animated.Adaptable<number>) => {
  const bottomPosition = Animated.interpolateNode(yOffset, {
    inputRange: [0, 50],
    outputRange: [0, 40],
  });

  return { bottomPosition };
};
