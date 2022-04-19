/** @format */
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PushNotification from "react-native-push-notification";
import { Home, Login, Splash } from "./Screens";
const Stack = createNativeStackNavigator();
export default function App() {
  React.useEffect(() => {
    PushNotification.cancelAllLocalNotifications();
    GoogleSignin.configure({
      webClientId:
        "678097608563-v5pu6m4m8pg7c1t248t28874i9ad15nj.apps.googleusercontent.com",
    });
    PushNotification.localNotificationSchedule({
      channelId: "test-channel-id",
      title: "Alarm",
      message: "Your app notified to open the application",
      allowWhileIdle: true,
      date: new Date(Date.now()),
      repeatTime: 86400000,
      repeatType: "day",
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
