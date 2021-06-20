import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
  trackDetails: {
    alignSelf: "flex-start",
    justifyContent: "space-between",
    height: "5rem",
    width: "100%",
  },
  trackDetailTitle: {
    color: "white",
    fontSize: "2.3rem",
    fontWeight: "bold",
  },
  trackDetailArtists: {
    color: "#ffffffb7",
    fontSize: "1.5rem",
    fontWeight: "500",
  },
  iconButton: {
    right: 0,
    top: 6,
    position: "absolute",
  },
});
