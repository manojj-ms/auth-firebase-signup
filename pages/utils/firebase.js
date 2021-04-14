import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDh_UbnleyALjhhHsG26dOOSMklRR-TW1A",
  authDomain: "kanishka-cards-31c74.firebaseapp.com",
  projectId: "kanishka-cards-31c74",
  storageBucket: "kanishka-cards-31c74.appspot.com",
  messagingSenderId: "855488286677",
  appId: "1:855488286677:web:8aec01e9348205a44cb75c"
  };
  export const app = firebase.initializeApp(firebaseConfig);
  export const db = app.database();
  export const auth = app.auth();
