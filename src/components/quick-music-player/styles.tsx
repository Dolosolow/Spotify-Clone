import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
  playerContainer: {
    height: "5.8rem",
    width: "100%",
    backgroundColor: "#292929",
    borderBottomWidth: 1,
    borderColor: "#121212",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "absolute",
    bottom: 75,
  },
  playerTrackDetails: {
    height: "100%",
    width: "75%",
    justifyContent: "center",
    alignItems: "center",
  },
  trackTitle: {
    color: "#fff",
    fontWeight: "600",
  },
  trackSubTitle: {
    color: "#fff",
    fontSize: "1.1rem",
    marginTop: 2,
  },
});
