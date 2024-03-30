import { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";
import { productpageStyle } from "../StyleSheets";
import { Image } from "expo-image";

const Question3 = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products", {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
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

    fetchProducts();
  }, []);

  if (isLoading) return <Text>Loading...</Text>;
  if (error && !products) return <Text>Error: {error}</Text>;

  return (
    <View style={productpageStyle.container}>
      {products?.map((product) => (
        <View key={product.id} style={productpageStyle.productContainer}>
          <View style={productpageStyle.imageContainer}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={product.images}
              renderItem={({ item }) => (
                <Image
                  source={{ uri: item }}
                  style={productpageStyle.productImage}
                />
              )}
            />
          </View>
          <View style={productpageStyle.productInfo}>
            <Text style={productpageStyle.productTitle}>{product.title}</Text>
            <Text style={productpageStyle.productDescription}>
              {product.description}
            </Text>
            <Text style={productpageStyle.productPrice}>
              Price: $ {product.price}
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
