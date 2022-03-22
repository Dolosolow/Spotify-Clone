import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import { getData } from "@local/store/actions";

export const useDataToRouteHandler = (type: "track" | "all") => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  useEffect(() => {
    navigation.addListener("focus", (e) => {
      if (type === "all") {
        dispatch(getData());
      } else {
        dispatch(getData("track"));
      }
    });
  }, []);
};
