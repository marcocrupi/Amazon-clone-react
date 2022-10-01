// Install firebase into our project: npm i firebase

// Link for me, to check if users are registered in the database:
// https://console.firebase.google.com/u/0/project/clone-514e2/authentication/users

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6KcqgiSGw6VzlEbph8kjZA53p28f5MJc",
  authDomain: "clone-514e2.firebaseapp.com",
  projectId: "clone-514e2",
  storageBucket: "clone-514e2.appspot.com",
  messagingSenderId: "258346827525",
  appId: "1:258346827525:web:dbc97a2864a6a0f2a8c16c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

// https://firebase.google.com/docs/web/modular-upgrade
