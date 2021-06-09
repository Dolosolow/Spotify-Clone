import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
    borderRadius: 20,
    backgroundColor: "white",
    paddingTop: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 999998,
  },
  handle: {
    backgroundColor: "#bebebe",
    borderRadius: 20,
    height: 4,
    position: "absolute",
    left: Dimensions.get("window").width / 2 - 25,
    width: 50,
  },
  tapContainer: {
    width: "100%",
    height: 50,
    position: "absolute",
    top: 8,
    zIndex: 999998,
  },
});
