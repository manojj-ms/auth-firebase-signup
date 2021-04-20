import firebase from "firebase/app"
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYBwaYFYPV59xq_RvVBtaM3ekyasRHzk4",
  authDomain: "mk-cards-ff546.firebaseapp.com",
  projectId: "mk-cards-ff546",
  storageBucket: "mk-cards-ff546.appspot.com",
  messagingSenderId: "87455246557",
  appId: "1:87455246557:web:c32f0909a24c49db2ad334",
  measurementId: "G-DYZ35FH83W"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();