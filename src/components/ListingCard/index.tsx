import React from "react";
import { View, Text, Image } from "react-native";

import { styles } from "./styles";

interface LCProps {
  data: {
    id: string;
    image: string;
    type: string;
    title: string;
    bed: number;
    bedroom: number;
    oldPrice: number;
    newPrice: number;
    totalPrice: number;
    coordinate: {
      latitude: number;
      longitude: number;
    };
  };
}

export const ListingCard = ({ data }: LCProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: data.image }} />
      {/* bed & bedroom */}
      <Text style={styles.subText}>
        <Text>
          {data.bed} bed{data.bed > 1 ? "s" : ""}
        </Text>
        &nbsp;•&nbsp;
        <Text>
          {data.bedroom} bedroom{data.bed > 1 ? "s" : ""}
        </Text>
      </Text>
      {/* type & description */}
      <Text style={styles.description} numberOfLines={2}>
        {data.type}. {data.title}
      </Text>
      {/* old price & new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${data.oldPrice}</Text>
        <Text style={styles.newPrice}>&nbsp;${data.newPrice}&nbsp;</Text>
        <Text>/ night</Text>
      </Text>
      {/* total price */}
      <Text style={styles.totalPrice}>${data.totalPrice} total</Text>
    </View>
  );
};
