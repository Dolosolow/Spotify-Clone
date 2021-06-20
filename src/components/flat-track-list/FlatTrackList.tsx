import React from "react";
import Animated from "react-native-reanimated";
import { FlatList } from "react-native";
import type { StyleProp, ViewStyle, ListRenderItem } from "react-native";

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
  const { bottomPosition } = getAnimatedNodes(props.yOffset);

  return (
    <>
      <Animated.View style={[styles.flatListOverlay, { bottom: bottomPosition }]} />
      <FlatList
        scrollEnabled={enableScroll}
        data={props.data && props.data.list}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={props.contentContainerStyle}
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
