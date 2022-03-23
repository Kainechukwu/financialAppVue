import firebase from 'firebase';
// const firebase = require("firebase")
import { Log, } from "@/components/util";
import store from "@/store/index.js";
import UserActions from "@/services/userActions/userActions.js"


export const initializeFirebase = () => {
  firebase.initializeApp({
    messagingSenderId: '193154658535'
  });

  // use other service worker
  // navigator.serviceWorker
  //   .register('/my-sw.js')
  //   .then((registration) => {
  //     firebase.messaging().useServiceWorker(registration);
  //   });
}

export const askForPermissioToReceiveNotifications = async () => {
  try {

    const messaging = firebase.messaging();

    await messaging.requestPermission();

    messaging.getToken({ vapidKey: 'BHRRXHy5mJ9xe_Jz-hmySBrETyQpeP7jCG8xu2HOlPyfBwtkv1HvlYlnXTnZlvAWeOAMRqr7SmhkjioS4ZBDBPQ' }).then((currentToken) => {
      if (currentToken) {
        // Send the token to your server and update the UI if necessary
        // ...
      } else {
        // Show permission request UI
        Log.info('No registration token available. Request permission to generate one.');
        // ...
      }
    }).catch((err) => {
      Log.info('An error occurred while retrieving token. ' + JSON.stringify(err));
      // ...
    });


    const token = await messaging.getToken();

    Log.info('user FCM token: ' + JSON.stringify(token));
    UserActions.subscribeDevice(
      {
        token: token,
        userId: store.getters["authToken/userId"]
      },
      (response) => {
        Log.info("response FCM:" + JSON.stringify(response))
      },
      (error) => {
        Log.error("error FCM:" + JSON.stringify(error))
      }
    )

    return token;
  } catch (error) {
    Log.error(error);
  }
}