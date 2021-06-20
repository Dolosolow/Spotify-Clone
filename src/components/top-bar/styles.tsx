import { easeGradient } from "react-native-easing-gradient";
import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
  topbar: {
    width: "100%",
    height: "10rem",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    zIndex: 999,
    backgroundColor: "#305ae2",
  },
  gradientWrapper: {
    ...EStyleSheet.absoluteFillObject,
    opacity: 0.85,
  },
  topbarTitle: { marginTop: "3.5rem", color: "#fff", fontWeight: "700", fontSize: "1.6rem" },
});

export const { colors, locations } = easeGradient({
  colorStops: {
    0: {
      color: "#305ae2",
    },
    1: {
      color: "#121212",
    },
  },
});
