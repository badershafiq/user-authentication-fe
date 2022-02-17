import React, { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import { Text, Card, Button, Icon } from "react-native-elements";
import Product from "../../components/Product/Product";
import { IMAGE_BASE_URL } from "../../constants/Constants";
import propertyService from "../../services/propertyService";

const Cards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    propertyService
      .getProperties()
      .then((res) => {
        console.log("products response", res.data);
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log("products error", err.response.data.message);
      });
  }, []);

  const renderProducts = () =>
    products.map((product, index) => (
      <View key={index} style={styles.productContainer}>
        <Product
          title={product.name}
          imgUri={IMAGE_BASE_URL + product.image_path}
          description={product.description.substr(0, 40)}
        />
      </View>
    ));
  return (
    <>
      <ScrollView>
        <View style={styles.container}>{renderProducts()}</View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    flexDirection: "row",
    paddingHorizontal: 10,
    marginTop: 10,
    justifyContent: "space-between",
  },
  productContainer: { width: "49%", marginBottom: 10 },
});

export default Cards;
