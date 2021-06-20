import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";

interface GOProps {
  colors: string[];
  locations: number[];
}

export const GradientOverlay = ({ colors, locations }: GOProps) => (
  <View style={styles.gradientOverlay}>
    <LinearGradient colors={colors} locations={locations} style={StyleSheet.absoluteFill} />
  </View>
);
