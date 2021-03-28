import firebase from "firebase";
import 'firebase/firestore';
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLIfDzYvdKzoQZh1oaGqVBhHEkDEx0N8M",
  authDomain: "wedding-website-2-d6b26.firebaseapp.com",
  databaseURL: "https://wedding-website-2-d6b26.firebaseio.com",
  projectId: "wedding-website-2-d6b26",
  storageBucket: "wedding-website-2-d6b26.appspot.com",
  messagingSenderId: "1082860186504",
  appId: "1:1082860186504:web:d21d927374c8f0d952a83d"
};

firebase.initializeApp(firebaseConfig);

export default firebase;