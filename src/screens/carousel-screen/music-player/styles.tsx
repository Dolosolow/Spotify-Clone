import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const styles = EStyleSheet.create({
  btnContainer: {
    backgroundColor: "#1212127b",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingTop: "1.1rem",
    paddingHorizontal: "2rem",
    position: "absolute",
    left: 0,
    height,
    width,
  },
});
