import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDrf6Dmg-Cyje623n6yTpCjm-XkZnBWT4w",
  authDomain: "planning-app-b54f7.firebaseapp.com",
  databaseURL: "https://planning-app-b54f7.firebaseio.com",
  projectId: "planning-app-b54f7",
  storageBucket: "planning-app-b54f7.appspot.com",
  messagingSenderId: "678932272653"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
