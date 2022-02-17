import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Input, Icon, Button, Text } from "react-native-elements";
import { useFormik } from "formik";
import Constants from "../../constants/Constants";
import { useNavigation } from "@react-navigation/native";
import { AuthFormValidation } from "./Validation";
import authService from "../../services/authService";
export default AuthForm = ({ type }) => {
  const {
    AUTH: {
      FORM_TYPE: { LOGIN },
    },
  } = Constants;

  const navigation = useNavigation();
  const [apiError, setApiError] = useState("");
  const { handleChange, handleSubmit, handleBlur, values, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
    },

    onSubmit: (values) => {
      const { email, password, name } = values;
      type === LOGIN
        ? authService
            .login({ email, password })
            .then((res) => {
              console.log("res", res);
              navigation.navigate("Home");
            })
            .catch(({ response }) => {
              setApiError(response.data.message);
              console.log("err login", response.data.message);
            })
        : authService
            .register({ email, password, name })
            .then((res) => {
              console.log("res", res);
              navigation.navigate("Login");
            })
            .catch(({ response }) => {
              setApiError(response.data.message);
              console.log("err signup", response.data.message);
            });
    },
    validationSchema: AuthFormValidation,
  });

  return (
    <>
      <Text style={styles.formTitle} h4>
        {type} to Continue
      </Text>
      {type !== LOGIN && (
        <Input
          label="Your Name"
          placeholder="John"
          leftIcon={{ type: "mateiral-icons", name: "email" }}
          errorStyle={styles.error}
          errorMessage={errors.name}
          value={values.name}
          onBlur={handleBlur("name")}
          onChangeText={handleChange("name")}
        />
      )}

      <Input
        label="Your E-mail address"
        placeholder="abc@example.com"
        leftIcon={{ type: "mateiral-icons", name: "email" }}
        errorStyle={styles.error}
        errorMessage={errors.email}
        value={values.email}
        onBlur={handleBlur("email")}
        onChangeText={handleChange("email")}
      />

      <Input
        label="Password"
        placeholder="*********"
        leftIcon={{ type: "font-awesome", name: "lock" }}
        errorStyle={styles.error}
        errorMessage={errors.password}
        value={values.password}
        onBlur={handleBlur("password")}
        onChangeText={handleChange("password")}
        secureTextEntry={true}
      />
      <Text>{apiError}</Text>
      <Button
        title={type}
        loading={false}
        loadingProps={{ size: "small", color: "white" }}
        buttonStyle={styles.actionBtn}
        titleStyle={styles.actionBtnTitle}
        containerStyle={styles.actionBtnContainer}
        onPress={() => {
          handleSubmit();
        }}
      />

      <Text style={{ textAlign: "center" }}>
        {type === LOGIN ? (
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text>Dont have an account? SignUp</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text>Already have an account? Login</Text>
          </TouchableOpacity>
        )}
      </Text>
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

  formTitle: { textAlign: "center", paddingBottom: 40 },

  error: { color: "red" },

  actionBtn: {
    backgroundColor: "rgba(111, 202, 186, 1)",
    borderRadius: 5,
  },

  actionBtnTitle: { fontWeight: "bold", fontSize: 18 },

  actionBtnContainer: {
    height: 50,
    width: "100%",
    marginTop: 30,
    marginVertical: 10,
  },
});
