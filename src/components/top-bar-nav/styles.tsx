import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
  topbarNav: {
    width: "100%",
    height: "4rem",
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  absoluteTopbarNav: {
    width: "90%",
    height: "4rem",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 1000,
  },
  absoluteTopbarWrapper: {
    backgroundColor: "#1212125c",
    borderRadius: 40 / 2,
    height: 36,
    width: 36,
    paddingTop: 1.5,
    paddingLeft: 4,
  },
});
