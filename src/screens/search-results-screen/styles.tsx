import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const styles = EStyleSheet.create({
  searchResultsContainer: {
    backgroundColor: "#121212",
    height: "100%",
    width: width,
    paddingTop: "6rem",
  },
  searchResultsListContainer: {
    backgroundColor: "#121212",
    paddingTop: "1.5rem",
    minHeight: height,
  },
});
