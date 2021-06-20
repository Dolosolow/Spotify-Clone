import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
  track: {
    backgroundColor: "#121212",
    alignItems: "center",
    flexDirection: "row",
    height: "7rem",
    justifyContent: "space-between",
    paddingHorizontal: "1.5rem",
    flex: 1,
    width: "100%",
  },
  text: { color: "white", fontSize: "1.6rem", fontWeight: "500" },
  subText: { color: "#ffffffac", marginTop: 2, fontSize: "1.2rem" },
});
