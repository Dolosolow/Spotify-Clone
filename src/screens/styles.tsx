import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#82d2d8",
    alignItems: "center",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  btn: {
    backgroundColor: "#f15454",
    borderRadius: 50,
    height: 40,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 70,
  },
  btnText: {
    color: "white",
    fontSize: 16,
  },
  header: {
    alignItems: "center",
    borderBottomWidth: 0.7,
    borderBottomColor: "#dddddd",
    paddingVertical: 25,
  },
  headText: {
    fontSize: 18,
    fontWeight: "500",
  },
  contentContainer: {
    alignItems: "center",
    borderTopColor: "#b6b6b6",
    borderTopWidth: 0.7,
    marginHorizontal: 20,
  },
  psaText: {
    alignSelf: "flex-start",
    fontSize: 14,
    fontWeight: "300",
    marginVertical: 15,
  },
  searchBtn: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 50,
    height: 40,
    zIndex: 999999,
    justifyContent: "center",
    width: Dimensions.get("window").width / 1.2,
    position: "absolute",
    bottom: 796,
  },
  searchBtnTitle: {
    alignItems: "flex-end",
    fontWeight: "600",
    position: "absolute",
    bottom: 12,
  },
  listContainer: { marginVertical: 15, flexDirection: "row", flexWrap: "wrap" },
  listText: { fontWeight: "300" },
  listLink: { textDecorationLine: "underline" },
});

// const styles = StyleSheet.create({
//   listWrap: { height: Dimensions.get("window").height, marginHorizontal: 20 },
//   headerContainer: { marginVertical: 15, flexDirection: "row", flexWrap: "wrap" },
//   headerText: { fontWeight: "300" },
//   headerLink: { textDecorationLine: "underline" },
//   container: {
//     height: 600,
//     position: "absolute",
//     paddingHorizontal: 20,
//     bottom: 0,
//   },
// });
