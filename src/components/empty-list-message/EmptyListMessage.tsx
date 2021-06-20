import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

interface ELMProps {
  headline: string;
  subText: string;
}

export const EmptyListMessage = ({ headline, subText }: ELMProps) => (
  <View style={styles.emptyListMsg}>
    <Text adjustsFontSizeToFit style={styles.emptyHeadlineText}>
      {headline}
    </Text>
    <Text adjustsFontSizeToFit style={styles.emptySubText}>
      {subText}
    </Text>
  </View>
);
