
import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAPhp8qyZf01raqMw8Ge6HtoUD9t80aGgo",
  authDomain: "kanishka-cards-cb85c.firebaseapp.com",
  databaseURL: "https://kanishka-cards-cb85c-default-rtdb.firebaseio.com",
  projectId: "kanishka-cards-cb85c",
  storageBucket: "kanishka-cards-cb85c.appspot.com",
  messagingSenderId: "323096827693",
  appId: "1:323096827693:web:627c8fe8e680528a9ce5a4",
  measurementId: "G-ZSP5L7J8NM"
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();