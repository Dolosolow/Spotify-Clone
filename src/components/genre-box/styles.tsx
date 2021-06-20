import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
  boxContainer: {
    width: "48%",
    height: "10.5rem",
    borderRadius: "0.5rem",
    backgroundColor: "#c0992c",
    padding: "1.5rem",
    marginTop: "1.5rem",
    overflow: "hidden",
  },
  sectionText: {
    color: "#fafafa",
    fontSize: "1.7rem",
    fontWeight: "700",
  },
  sectionImg: {
    height: "7.5rem",
    width: "7.5rem",
    position: "absolute",
    top: "3rem",
    right: -25,
    transform: [{ rotate: "20deg" }],
  },
});
