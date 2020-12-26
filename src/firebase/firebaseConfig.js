import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJ3U7Y8N-DDwfxNmjva5xuAX-lX4LgOSU",
  authDomain: "react-app-udemy-15013.firebaseapp.com",
  projectId: "react-app-udemy-15013",
  storageBucket: "react-app-udemy-15013.appspot.com",
  messagingSenderId: "105309157493",
  appId: "1:105309157493:web:79bff7b76175ea69b7a03c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { database, googleAuthProvider, firebase };
