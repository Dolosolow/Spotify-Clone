import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { View, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { StyleProp, ViewStyle } from "react-native";

interface RBProps {
  goBack?: boolean;
  buttonStyles?: StyleProp<ViewStyle>;
  chevronDirection?: "left" | "right" | "up" | "down";
  onNavButtonClick?: () => void;
}

export const RedirectButton = ({ chevronDirection = "left", ...props }: RBProps) => {
  const navigation = useNavigation();

  const handleButtonClick = () => {
    if (props.onNavButtonClick) {
      props.onNavButtonClick();
    } else if (props.goBack) {
      navigation.goBack();
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
