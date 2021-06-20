import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import { TouchableWithoutFeedback, View, Text, Image } from "react-native";
import type { ImageSourcePropType } from "react-native";

import { styles } from "./styles";

interface TRProps {
  type: "song" | "artist";
  title: string;
  artists: string[];
  coverImg?: ImageSourcePropType;
  onItemPress: () => void;
}

export const SearchItem = (props: TRProps) => {
  return (
    <TouchableWithoutFeedback onPress={props.onItemPress}>
      <View style={styles.searchItem}>
        <View
          style={{
            width: 50,
            height: "100%",
            overflow: "hidden",
            backgroundColor: "#c7c7c7",
            borderRadius: props.type === "artist" ? 100 : 0,
          }}
        >
          {props.coverImg && <Image style={styles.searchItemCoverImg} source={props.coverImg} />}
        </View>
        <View style={styles.searchItemInlineContainer}>
          <View style={styles.searchItemTextWrapper}>
            <Text style={styles.resultTitle}>{props.title}</Text>
            <Text style={styles.resultSubText}>
              {props.type === "song" ? "Song" : "Artist"}
              {props.type === "song" && (
                <>
                  <Text style={styles.resultMiscChar}>•</Text> {props.artists.join(", ")}
                </>
              )}
            </Text>
          </View>
          <Entypo
            name="chevron-thin-right"
            color="white"
            size={20}
            style={styles.searchItemChevron}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
