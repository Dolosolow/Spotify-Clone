import React from "react";
import { View, Text } from "react-native";

import { DragsterFlatList } from "../Dragster";
import { ListingCard } from "../ListingCard";

import feed from "../../../assets/data/feed";
import { styles } from "./styles";

export const SearchResultList = () => {
  return (
    <DragsterFlatList
      data={feed}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => <ListingCard data={item} />}
      ListHeaderComponent={() => (
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            Review COVID-19 travel restrictions before you book.
          </Text>
          <Text style={styles.headerLink}>Learn more</Text>
        </View>
      )}
    />
  );
};
