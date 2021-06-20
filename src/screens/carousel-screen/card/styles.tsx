import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const styles = EStyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    height,
    width,
  },
  cardVideo: {
    width: "100%",
    height: "100%",
  },
});
