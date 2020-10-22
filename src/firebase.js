import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAmKJw7tYASV6eMIFb_IwIQlObGJz75Noc",
    authDomain: "crud-vue-3cb1b.firebaseapp.com",
    databaseURL: "https://crud-vue-3cb1b.firebaseio.com",
    projectId: "crud-vue-3cb1b",
    storageBucket: "crud-vue-3cb1b.appspot.com",
    messagingSenderId: "115343689083",
    appId: "1:115343689083:web:bfdb2dd30dcfec56f229de"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };