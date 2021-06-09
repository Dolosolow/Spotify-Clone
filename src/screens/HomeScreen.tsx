import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { View, Text, Dimensions } from "react-native";
import Animated, { Extrapolate } from "react-native-reanimated";

import { Dragster, DragsterFlatList } from "../components/Dragster";
import { ListingCard } from "../components/ListingCard";

import { styles } from "./styles";
import feed from "../../assets/data/feed";

interface IHSProps {
  yPosition: Animated.Value<number>;
}

const { width } = Dimensions.get("window");

export const HomeScreen = ({ navigation, yPosition }: StackScreenProps<any> & IHSProps) => {
  const opacity = Animated.interpolateNode(yPosition, {
    inputRange: [730, 796],
    outputRange: [1, 0],
  });

  const aWidth = Animated.interpolateNode(yPosition, {
    inputRange: [30, 155],
    outputRange: [width, styles.searchBtn.width],
    extrapolateRight: Extrapolate.CLAMP,
  });

  const aHeight = Animated.interpolateNode(yPosition, {
    inputRange: [30, 155],
    outputRange: [120, styles.searchBtn.height],
    extrapolateRight: Extrapolate.CLAMP,
  });

  const aRadius = Animated.interpolateNode(yPosition, {
    inputRange: [76, 155],
    outputRange: [0, styles.searchBtn.borderRadius],
    extrapolateRight: Extrapolate.CLAMP,
  });

  return (
    <View style={styles.container} pointerEvents="box-none">
      <Animated.View
        style={[
          styles.searchBtn,
          { width: aWidth },
          { height: aHeight },
          { borderRadius: aRadius },
        ]}
      >
        <Animated.Text style={[styles.searchBtnTitle]}>Jersey City</Animated.Text>
      </Animated.View>
      <Dragster
        indexStart={1}
        snapPoints={[100, 500, 880]}
        sheetStyle={{ paddingHorizontal: 20 }}
        onScroll={({ y }) => {
          yPosition.setValue(y);
        }}
      >
        <View style={[styles.header]}>
          <Text style={styles.headText}>96 places to stay</Text>
        </View>
        <DragsterFlatList
          data={feed}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => <ListingCard data={item} />}
          ListHeaderComponent={() => (
            <View style={styles.listContainer}>
              <Text style={styles.listText}>
                Review COVID-19 travel restrictions before you book.
              </Text>
              <Text style={styles.listLink}>Learn more</Text>
            </View>
          )}
        />
      </Dragster>
    </View>
  );
};
