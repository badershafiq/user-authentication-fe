import React from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import { Text, Card, Button, Icon } from "react-native-elements";

export default Product = ({ title, imgUri, description }) => {
  return (
    <Card containerStyle={styles.container}>
      <Card.Image
        style={{ padding: 0 }}
        source={{
          uri: imgUri,
        }}
      />
      <View style={{ padding: 10 }}>
        <Card.Title>{title}</Card.Title>
        <Card.Divider />
        <Text style={{ marginBottom: 10 }}>{description}</Text>
        <Button
          icon={
            <Icon
              name="shopping-cart"
              color="#ffffff"
              iconStyle={styles.actionBtnIcon}
            />
          }
          buttonStyle={styles.actionBtn}
          title="Add to cart"
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: { padding: 0, margin: 0 },

  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: "row",
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },

  actionBtn: {
    backgroundColor: "rgba(111, 202, 186, 1)",
    borderRadius: 5,
  },
  actionBtnIcon: { marginRight: 10 },
});
