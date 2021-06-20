import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
  headerCover: {
    ...EStyleSheet.absoluteFillObject,
    height: 520,
  },
  headerCoverOverlay: {
    ...EStyleSheet.absoluteFillObject,
    backgroundColor: "#305ae2",
    zIndex: 0,
  },
  headerImgCoverOverlay: {
    ...EStyleSheet.absoluteFillObject,
    backgroundColor: "#121212",
  },
  headerCoverImg: {
    ...EStyleSheet.absoluteFillObject,
    aspectRatio: 3 / 2,
    width: "100%",
    height: "100%",
  },
});
