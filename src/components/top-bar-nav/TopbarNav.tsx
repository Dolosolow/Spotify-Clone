import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import { View } from "react-native";

import { RedirectButton } from "@local/components/redirect-button";

import { styles } from "./styles";

interface TBNProps {
  type?: "absolute";
  refreshDataOnRedirect?: boolean;
}

export const TopbarNav = ({ type, refreshDataOnRedirect }: TBNProps) => {
  if (type === "absolute") {
    return (
      <View style={styles.absoluteTopbarNav}>
        <View style={styles.absoluteTopbarWrapper}>
          <RedirectButton
            goBack
            refreshDataOnRedirect={refreshDataOnRedirect}
            chevronDirection="left"
            buttonStyles={{ paddingTop: 5 }}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.topbarNav}>
      <RedirectButton
        goBack
        refreshDataOnRedirect={refreshDataOnRedirect}
        chevronDirection="down"
        buttonStyles={{ paddingTop: 5 }}
      />
      <Entypo name="dots-three-horizontal" size={25} color="#fafafa" />
    </View>
  );
};
