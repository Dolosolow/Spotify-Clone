import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import { View } from "react-native";

import { RedirectButton } from "@local/components/redirect-button";

import { styles } from "./styles";

export const TopbarNav = () => {
  return (
    <View style={styles.topbarNav}>
      <RedirectButton goBack chevronDirection="down" buttonStyles={{ paddingTop: 5 }} />
      <Entypo name="dots-three-horizontal" size={25} color="#fafafa" />
    </View>
  );
};
