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
  overlayContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: "3.5rem",
    left: "1rem",
  },
  overlayCoverImg: {
    height: "2.8rem",
    width: "2.8rem",
    borderRadius: "10rem",
  },
  overlayText: {
    marginLeft: 8,
    color: "#fafafa",
    fontSize: "1.2rem",
  },
  playerDetailsContainer: {
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
  },
});
