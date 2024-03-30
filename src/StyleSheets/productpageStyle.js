import { StyleSheet } from "react-native";

const productpageStyle = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginHorizontal: 16,
  },
  productContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20,
  },
  productInfo: {
    flex: 1,
  },
  productImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productDescription: {
    flexWrap: "wrap",
    fontSize: 14,
  },
  productPrice: {
    fontSize: 14,
  },
  productBrand: {
    fontSize: 14,
  },
  imageContainer: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 8,
  },
});

export default productpageStyle;
