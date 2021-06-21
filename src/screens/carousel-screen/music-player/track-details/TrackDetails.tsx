import React, { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

export const TrackDetails = ({ track }: { track: any }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <View style={styles.trackDetails}>
      <Text style={styles.trackDetailTitle}>{track.name}</Text>
      <Text style={styles.trackDetailArtists}>{track.artist.join(", ")}</Text>
      <TouchableOpacity style={styles.iconButton} onPress={() => setIsFavorited(!isFavorited)}>
        {isFavorited ? (
          <AntDesign name="heart" color="#3edd1e" size={22} />
        ) : (
          <AntDesign name="hearto" color="#fff" size={22} />
        )}
      </TouchableOpacity>
    </View>
  );
};
