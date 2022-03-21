import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { View, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import type { StyleProp, ViewStyle } from "react-native";

import { getData } from "@local/store/actions";
interface RBProps {
  goBack?: boolean;
  refreshDataOnRedirect?: boolean;
  buttonStyles?: StyleProp<ViewStyle>;
  chevronDirection?: "left" | "right" | "up" | "down";
  onNavButtonClick?: () => void;
}

export const RedirectButton = ({ chevronDirection = "left", ...props }: RBProps) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    if (props.onNavButtonClick) {
      props.onNavButtonClick();
    } else if (props.goBack) {
      navigation.goBack();
    }

    if (props.refreshDataOnRedirect) {
      dispatch(getData());
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleButtonClick}>
      <View style={props.buttonStyles}>
        <AntDesign name={`${chevronDirection}`} size={24} color="#fff" />
      </View>
    </TouchableWithoutFeedback>
  );
};
