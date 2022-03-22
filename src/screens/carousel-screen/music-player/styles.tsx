import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen");

export const styles = EStyleSheet.create({
  btnContainer: {
    backgroundColor: "#1212127b",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "7rem",
    paddingHorizontal: "2rem",
    position: "absolute",
    left: 0,
    height,
    width,
  },
  playerDetailsContainer: {
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
  },
});
