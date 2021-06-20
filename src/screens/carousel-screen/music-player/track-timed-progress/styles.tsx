import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

export const styles = EStyleSheet.create({
  timeProgressContainer: {
    width,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "2rem",
    marginTop: "2rem",
    marginBottom: "4rem",
  },
  inlineWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 6,
  },
  timeText: {
    color: "white",
    fontSize: 12,
  },
});
