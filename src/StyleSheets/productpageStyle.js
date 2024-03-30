import { StyleSheet } from "react-native";

const productpageStyle = StyleSheet.create({
  productContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  productImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productDescription: {
    fontSize: 14,
  },
  productPrice: {
    fontSize: 14,
  },
  productBrand: {
    fontSize: 14,
  },
});

export default productpageStyle;
