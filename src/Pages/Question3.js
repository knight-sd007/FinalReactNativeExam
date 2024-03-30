import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { productpageStyle } from "../StyleSheets";

const Question3 = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      const filteredProducts = data.products.filter(
        (product) => product.price >= 1500
      );
      setProducts(filteredProducts);
    } catch (error) {
      setError("Error fetching products:" + error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <View>
      {products.map((product) => (
        <View key={product.id} style={productpageStyle.productContainer}>
          <Image
            source={{ uri: product.images[0] }}
            style={productpageStyle.productImage}
          />
          <View style={productpageStyle.productInfo}>
            <Text style={productpageStyle.productTitle}>{product.title}</Text>
            <Text style={productpageStyle.productDescription}>
              {product.description}
            </Text>
            <Text style={productpageStyle.productPrice}>
              Price: {product.price}
            </Text>
            <Text style={productpageStyle.productBrand}>
              Brand: {product.brand}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Question3;
