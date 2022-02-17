import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, Icon, Card } from "react-native-elements";
import AuthForm from "../../../components/AuthForm/AuthForm";
import Constants from "../../../constants/Constants";

export default Signup = () => {
  const {
    AUTH: {
      FORM_TYPE: { SIGN_UP },
    },
  } = Constants;

  return (
    <>
      <View style={styles.container}>
        <Card containerStyle={styles.cardContainer}>
          <AuthForm type={SIGN_UP} />
        </Card>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  cardContainer: {
    width: "90%",
    paddingVertical: 30,
    justifyContent: "center",
  },
});
