import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  description: {
    fontSize: 18,
    fontWeight: "300",
    lineHeight: 23,
  },
  image: {
    aspectRatio: 3 / 2,
    borderRadius: 10,
    resizeMode: "cover",
    width: "100%",
  },
  subText: {
    color: "#aaaaaa",
    fontSize: 15,
    fontWeight: "500",
    marginVertical: 8,
  },
  prices: {
    fontSize: 20,
    marginVertical: 5,
  },
  oldPrice: {
    color: "#aaaaaa",
    textDecorationLine: "line-through",
    fontWeight: "bold",
  },
  newPrice: {
    fontWeight: "bold",
  },
  totalPrice: {
    color: "#aaaaaa",
    textDecorationLine: "underline",
  },
});
