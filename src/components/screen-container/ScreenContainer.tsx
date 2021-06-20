import React from "react";
import { View } from "react-native";

import { styles } from "./styles";

export const ScreenContainer = (props: { children: React.ReactNode }) => {
  return <View style={styles.container}>{props.children}</View>;
};
