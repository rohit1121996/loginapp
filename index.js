/** @format */

import { registerRootComponent } from "expo";
import PushNotification from "react-native-push-notification";

import App from "./App";

PushNotification.configure({
  onNotification: function (notification) {
    console.log("NOTIFICATION:", notification);
  },
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  popInitialNotification: true,

  requestPermissions: true,
  requestPermissions: Platform.OS === "ios",
});

registerRootComponent(App);
