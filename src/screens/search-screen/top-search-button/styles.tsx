import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  searchBtnWrapper: {
    backgroundColor: "#121212",
    color: "#121212",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "hidden",
    minHeight: 55,
    width,
    position: "absolute",
    marginLeft: -15,
    zIndex: 100,
  },
  searchBtn: {
    backgroundColor: "#fafafa",
    borderRadius: 6,
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 15,
    width: width - 30,
  },
  searchBtnText: {
    marginTop: 3,
    marginLeft: 8,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "500",
  },
});
