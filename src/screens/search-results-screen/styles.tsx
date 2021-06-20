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
    minHeight: height,
    backgroundColor: "#121212",
    marginTop: "2rem",
  },
});
