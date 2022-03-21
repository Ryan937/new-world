// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAw-iauHuiSUErA9BXYfgwJtQ1BFHNqrkY",
  authDomain: "shinsegae-siha.firebaseapp.com",
  projectId: "shinsegae-siha",
  storageBucket: "shinsegae-siha.appspot.com",
  messagingSenderId: "493007198995",
  appId: "1:493007198995:web:b7971ca222b582b8e3d8e6",
  measurementId: "G-N9VDNS1RWH"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const database = getFirestore(firebaseApp);
// const analytics = getAnalytics(app);

export default database;