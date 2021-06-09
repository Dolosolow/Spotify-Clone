import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { DragsterFlatList } from "../components/Dragster";
import { ListingCard } from "../components/ListingCard";

import feed from "../../assets/data/feed";

export const ListView = ({ list }: { list: typeof feed }) => {
  return (
    <DragsterFlatList
      data={list}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => <ListingCard data={item} />}
      ListHeaderComponent={() => (
        <View style={styles.listContainer}>
          <Text style={styles.listText}>Review COVID-19 travel restrictions before you book.</Text>
          <Text style={styles.listLink}>Learn more</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: { marginVertical: 15, flexDirection: "row", flexWrap: "wrap" },
  listText: { fontWeight: "300" },
  listLink: { textDecorationLine: "underline" },
});
