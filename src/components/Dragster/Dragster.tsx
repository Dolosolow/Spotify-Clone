import React, { useState } from "react";
import { View, Pressable, Dimensions, StyleProp, ViewStyle } from "react-native";
import { PanGestureHandler, PanGestureHandlerGestureEvent } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  runOnJS,
} from "react-native-reanimated";

import { styles } from "./styles";

interface DProps {
  indexStart: number;
  snapPoints: number[];
  children?: React.ReactNode;
  sheetStyle?: StyleProp<ViewStyle>;
  threshold?: number;
  withHandle?: boolean;
  onScroll?: (nativeEvent: { y: number }) => void;
}

const { height } = Dimensions.get("window");

const DragHandle = () => <View style={styles.handle} />;

export const Dragster = (props: DProps) => {
  const { indexStart, snapPoints, withHandle = true, threshold = 180 } = props;

  const translateY = useSharedValue(height - snapPoints[indexStart]);
  const [scrollEnable, setScrollEnable] = useState(false);

  const onScroll = (nativeEvent: { y: number }) => {
    "worklet";
    if (props.onScroll) {
      runOnJS(props.onScroll)({ y: nativeEvent.y });
    }
  };

  const scrollEnabaled = (enable: boolean) => {
    "worklet";
    runOnJS(setScrollEnable)(enable);
  };

  const snapToTop = () => {
    const topSnapPoint = height - snapPoints[snapPoints.length - 1];

    scrollEnabaled(true);

    translateY.value = withSpring(topSnapPoint, {
      damping: 20,
      stiffness: 120,
    });
  };

  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { translateY: number; currentIndex: number; start: number }
  >({
    onStart: (event, ctx) => {
      if (!ctx.currentIndex) {
        ctx.start = event.translationY;
        ctx.currentIndex = indexStart;
      }
      ctx.translateY = translateY.value;
    },
    onActive: (event, ctx) => {
      const isMaxIndex = ctx.currentIndex < snapPoints.length - 1;

      if (translateY.value < height - snapPoints[ctx.currentIndex] - threshold && isMaxIndex) {
        ctx.currentIndex += 1;
      } else if (translateY.value > height - snapPoints[ctx.currentIndex] + threshold) {
        ctx.currentIndex -= 1;
      }

      translateY.value = event.translationY + ctx.translateY;
    },
    onEnd: (event, ctx) => {
      const currentPoint = height - snapPoints[ctx.currentIndex];

      if (ctx.start > event.translationY && ctx.currentIndex === 2) {
        scrollEnabaled(true);
      }

      translateY.value = withSpring(currentPoint, {
        damping: 20,
        stiffness: 120,
      });
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    onScroll({ y: translateY.value });

    return {
      transform: [
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  const ChildrenWithProps = React.Children.map(props.children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        ...child.props,
        scrollEnabled: scrollEnable,
        onScrollChange: setScrollEnable,
      });
    }
    return child;
  });

  return (
    <PanGestureHandler onGestureEvent={panGestureEvent}>
      <Animated.View style={[styles.container, props.sheetStyle, animatedStyle]}>
        <Pressable onPress={snapToTop} style={styles.tapContainer}>
          {withHandle && <DragHandle />}
        </Pressable>
        {ChildrenWithProps}
      </Animated.View>
    </PanGestureHandler>
  );
};
