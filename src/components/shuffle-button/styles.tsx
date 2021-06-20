import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
  shuffleMiniButton: {
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "40rem",
    right: "1.5rem",
    zIndex: 999,
  },
  shuffleButton: {
    alignSelf: "center",
    backgroundColor: "#1db954",
    borderRadius: "10rem",
    height: "4.5rem",
    width: "22rem",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
  },
  shuffleBtnText: {
    textTransform: "uppercase",
    letterSpacing: 1,
    fontSize: "1.4rem",
    color: "white",
    fontWeight: "bold",
  },
});
