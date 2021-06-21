import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
  controllersContainer: {
    flexDirection: "row",
    marginBottom: "10rem",
    position: "relative",
    width: "100%",
    justifyContent: "center",
  },
  toggleLeftButton: {
    position: "absolute",
    left: 20,
    top: 5,
  },
  toggleRightButton: {
    right: 20,
    top: 5,
    position: "absolute",
  },
});
