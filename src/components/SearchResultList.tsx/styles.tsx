import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  listWrap: { height: Dimensions.get("window").height, marginHorizontal: 20 },
  headerContainer: { marginVertical: 15, flexDirection: "row", flexWrap: "wrap" },
  headerText: { fontWeight: "300" },
  headerLink: { textDecorationLine: "underline" },
  container: {
    height: 600,
    position: "absolute",
    paddingHorizontal: 20,
    bottom: 0,
  },
});
