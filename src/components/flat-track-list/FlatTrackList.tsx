import React from "react";
import Animated from "react-native-reanimated";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import type { StyleProp, ViewStyle, ListRenderItem } from "react-native";

import type { Store } from "@local/store/redux_store";

import { getAnimatedNodes } from "./animatedStyles";
import { styles } from "./styles";

interface FTLProps {
  data: any;
  yOffset: Animated.Value<number>;
  renderItem: ListRenderItem<any> | null | undefined;
  enableScroll?: boolean;
  ListHeaderComponent?: React.ReactElement;
  ListEmptyComponent?: React.ReactElement;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

export const FlatTrackList = ({ enableScroll = true, ...props }: FTLProps) => {
  const currentIndex = useSelector((state: Store) => state.currentIndex);

  const { bottomPosition } = getAnimatedNodes(props.yOffset);

  const listContainerStyles = Object.assign(
    { paddingBottom: currentIndex ? 50 : 0 },
    props.contentContainerStyle
  );

  return (
    <>
      <Animated.View style={[styles.flatListOverlay, { bottom: bottomPosition }]} />
      <FlatList
        scrollEnabled={enableScroll}
        data={props.data && props.data.list}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={listContainerStyles}
        keyExtractor={({ id, index }) => `${id}-${index}`}
        renderItem={props.renderItem}
        ListEmptyComponent={props.ListEmptyComponent}
        ListHeaderComponent={props.ListHeaderComponent}
        onScroll={({ nativeEvent }) => {
          props.yOffset.setValue(nativeEvent.contentOffset.y);
        }}
      />
    </>
  );
};
