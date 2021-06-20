import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
  overlayContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: "3.5rem",
    left: "1rem",
  },
  overlayCoverImg: {
    height: "2.8rem",
    width: "2.8rem",
    borderRadius: "10rem",
  },
  overlayText: {
    marginLeft: 8,
    color: "#fafafa",
    fontSize: "1.2rem",
  },
});
