import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
  inputAbsWrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    top: 0,
    paddingHorizontal: "1.2rem",
    zIndex: 99,
  },
  inputWrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: "1.2rem",
    zIndex: 99,
  },
  searchInput: {
    backgroundColor: "#ffffff1c",
    borderRadius: "0.6rem",
    fontWeight: "700",
    fontSize: "1.2rem",
    color: "#fafafa",
    flex: 1,
    height: "3.6rem",
    paddingLeft: "4rem",
  },
  inputCancelBtn: {
    borderRadius: "0.6rem",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 6,
    height: "3.6rem",
    width: "6.5rem",
  },
  inputCancelBtnText: {
    color: "#fafafa",
    fontWeight: "700",
    fontSize: "1.2rem",
  },
});
