import React from "react";
import { View, Text } from "react-native";
import type { StyleProp, ViewStyle, TextStyle } from "react-native";

import { styles } from "./styles";

interface NRProps {
  title: string;
  rowComponents?: React.ReactNode;
  containerStyles?: StyleProp<ViewStyle>;
  titleRowComponents?: React.ReactNode;
  titleSize?: "sm" | "lg";
}

export const NamedRow = ({ titleSize = "lg", ...props }: NRProps) => {
  const sizeStyles: StyleProp<TextStyle> =
    titleSize === "sm" ? { fontSize: 15, fontWeight: "700" } : { fontSize: 25, fontWeight: "bold" };

  return (
    <View style={Object.assign({ position: "relative", paddingTop: 15 }, props.containerStyles)}>
      <View style={styles.titleRow}>
        <Text adjustsFontSizeToFit style={Object.assign({ color: "#fff" }, sizeStyles)}>
          {props.title}
        </Text>
        {props.titleRowComponents ?? props.titleRowComponents}
      </View>
      <View style={styles.content}>{props.rowComponents}</View>
    </View>
  );
};
