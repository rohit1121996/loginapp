/** @format */

import React from "react";
import { Image, StyleSheet, Text, View, Button } from "react-native";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
const Login = ({ navigation }) => {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const signIn = async () => {
    setLoading(true);
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const credential = auth.GoogleAuthProvider.credential(
        userInfo.idToken,
        userInfo.accessToken
      );
      await auth().signInWithCredential(credential);
      setUser({ ...userInfo });
      setLoading(false);
      navigation.navigate("Home", {
        user: { ...userInfo },
      });
    } catch (error) {
      setLoading(false);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.error(error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.error(error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.error(error);
      } else {
        console.error(error);
      }
    }
  };
  return (
    <>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
      <Text>Login with google and push notification app</Text>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
        disabled={loading}
      />
    </>
  );
};
export default Login;
const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
