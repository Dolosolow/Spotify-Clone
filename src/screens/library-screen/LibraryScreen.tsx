import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View } from "react-native";
import type { StackScreenProps } from "@react-navigation/stack";

import { PlaylistScreen } from "./playlist-screen";

import { getData } from "@local/store/actions";
import type { RPList } from "@local/routes/routes-params-list";
import type { Store } from "@local/store/redux_store";
import type { Track } from "@local/types/index";

import { styles } from "./styles";

import { useDataToRouteHandler } from "../../hooks/useDataToRouteHandler";

export const LibraryScreen = ({ navigation }: StackScreenProps<RPList, "Home">) => {
  const { data } = useSelector((state: Store) => state);
  const dispatch = useDispatch();
  useDataToRouteHandler("track");

  useEffect(() => {
    dispatch(getData("track"));
  }, []);

  return (
    <View style={styles.container}>
      <PlaylistScreen navigation={navigation} data={data as Track[]} />
    </View>
  );
};
