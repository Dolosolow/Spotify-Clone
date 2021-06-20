import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

export const styles = EStyleSheet.create({
  searchItem: {
    width: width,
    height: "4.7rem",
    flexDirection: "row",
    backgroundColor: "#121212",
    paddingHorizontal: "1.5rem",
    marginVertical: "1rem",
  },
  searchItemInlineContainer: {
    flexDirection: "row",
    paddingVertical: "0.5rem",
    paddingLeft: "1.5rem",
    position: "relative",
    flexGrow: 1,
  },
  searchItemTextWrapper: {
    flex: 1,
    justifyContent: "space-between",
  },
  resultTitle: {
    color: "#fff",
    fontSize: "1.5rem",
    fontWeight: "500",
  },
  resultSubText: {
    color: "#ffffffa4",
    fontSize: "1.15rem",
  },
  resultMiscChar: {
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
  searchItemChevron: {
    top: "1rem",
    right: 0,
  },
  searchItemCoverImg: {
    width: "100%",
    height: "100%",
  },
});
