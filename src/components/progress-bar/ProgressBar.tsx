import React from "react";
import { View } from "react-native";

import { styles } from "./styles";

interface PBProps {
  progress: number;
}

export const ProgressBar = ({ progress }: PBProps) => (
  <View style={styles.progressBarWrapper}>
    <View style={{ ...styles.progressBar, width: `${progress}%` }} />
  </View>
);
