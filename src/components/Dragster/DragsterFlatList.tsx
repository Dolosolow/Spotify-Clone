import React from "react";
import Animated, { runOnJS, useAnimatedScrollHandler } from "react-native-reanimated";
import { FlatList, FlatListProps, StyleProp, ViewStyle } from "react-native";

interface IDFLProps<T> extends FlatListProps<T> {
  containerStyles?: StyleProp<ViewStyle>;
  scrollEnabled?: boolean;
  onScrollChange?: React.Dispatch<React.SetStateAction<boolean>>;
}

type AnimatedScrollHandlerProps = { enableScroll: boolean; previousScroll: number };

export const DragsterFlatList = <T extends unknown>(props: IDFLProps<T>) => {
  const { scrollEnabled = false, containerStyles } = props;

  const handleScrollEnableChange = () => {
    "worklet";
    if (props.onScrollChange) {
      runOnJS(props.onScrollChange)(false);
    }
  };

  const scrollHandler = useAnimatedScrollHandler<AnimatedScrollHandlerProps>({
    onScroll: (event, ctx) => {
      if (ctx.enableScroll && event.contentOffset.y <= 0 && ctx.previousScroll <= 0) {
        ctx.enableScroll = false;
        handleScrollEnableChange();
      }
      ctx.previousScroll = event.contentOffset.y;
    },
    onBeginDrag: (e, ctx) => {
      ctx.enableScroll = scrollEnabled;
    },
  });

  return (
    <FlatList
      data={props.data}
      pointerEvents={`${scrollEnabled ? "auto" : "none"}`}
      showsVerticalScrollIndicator={props.showsVerticalScrollIndicator || false}
      keyExtractor={props.keyExtractor}
      renderItem={props.renderItem}
      renderScrollComponent={(props) => (
        <Animated.ScrollView
          {...props}
          contentContainerStyle={containerStyles || { paddingBottom: 110 }}
          onScroll={scrollHandler}
        />
      )}
      ListHeaderComponent={props.ListHeaderComponent}
    />
  );
};
