import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCrxWach3gs9gIjzjS0CJfYuuOYuFtQlDo",
    authDomain: "kanishka-cards.firebaseapp.com",
    projectId: "kanishka-cards",
    storageBucket: "kanishka-cards.appspot.com",
    messagingSenderId: "781017416950",
    appId: "1:781017416950:web:059101ed97721ea97458d7"
  };
  export const app = firebase.initializeApp(firebaseConfig);
  export const db = app.database();
  export const auth = app.auth();
