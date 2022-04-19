/** @format */

import React from "react";
import { Image, StyleSheet, Text, View, Button } from "react-native";
import HomeComponent from "./components/Home";
import LoginComponent from "./components/Login";
import { AuthContext } from "./Context";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);
export const Home = ({ navigation, route }) => {
  return (
    <ScreenContainer>
      <HomeComponent user={route.params.user} />
    </ScreenContainer>
  );
};

export const Login = ({ navigation }) => {
  return (
    <ScreenContainer>
      <LoginComponent navigation={navigation} />
    </ScreenContainer>
  );
};

export const Splash = ({ navigation }) => (
  <ScreenContainer>
    <Text>Loading...</Text>
  </ScreenContainer>
);
