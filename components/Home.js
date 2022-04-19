/** @format */

import React from "react";
import { Image, StyleSheet, Text, View, Button } from "react-native";
const styles = StyleSheet.create({
  tinyLogo: {
    width: 200,
    height: 200,
  },
});

const HomeScreen = ({ user }) => {
  return (
    <View>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: user.user.photo
            ? user.user.photo
            : "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
      <Text>Logged in user is {user.user.name}</Text>
    </View>
  );
};
export default HomeScreen;
