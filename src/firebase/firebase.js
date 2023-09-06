import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhNl0ge5LYXyYgoRo0E_dDn2Uc1HIrJtA",
  authDomain: "my-wallet-d1ce7.firebaseapp.com",
  projectId: "my-wallet-d1ce7",
  storageBucket: "my-wallet-d1ce7.appspot.com",
  messagingSenderId: "562869501280",
  appId: "1:562869501280:web:9c1c4a43a44c37ca1db205",
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
