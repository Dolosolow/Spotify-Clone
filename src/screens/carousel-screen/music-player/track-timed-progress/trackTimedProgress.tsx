import React, { useEffect } from "react";
import { View, Text } from "react-native";

import { ProgressBar } from "@local/components/progress-bar";

import { AudioPlayer } from "@local/utils/AudioPlayer";
import { styles } from "./styles";

interface TTPProps {
  rtPosition: number;
  trackDuration: number;
}

export const TrackTimedProgress = ({ rtPosition, trackDuration }: TTPProps) => {
  return (
    <View style={styles.timeProgressContainer}>
      <ProgressBar progress={(rtPosition / trackDuration) * 100} />
      <View style={styles.inlineWrapper}>
        <Text style={styles.timeText}>{AudioPlayer.formatTimeDuration(rtPosition)}</Text>
        <Text style={styles.timeText}>
          -{AudioPlayer.formatTimeDuration(trackDuration - rtPosition)}
        </Text>
      </View>
    </View>
  );
};
