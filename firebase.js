import {initializeApp} from 'firebase';
import firebase from 'firebase'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmCQtDtVIcmKudhRoJbiyJlqePlKmgNTE",
  authDomain: "rn-instagram-clone-69813.firebaseapp.com",
  projectId: "rn-instagram-clone-69813",
  storageBucket: "rn-instagram-clone-69813.appspot.com",
  messagingSenderId: "872232266900",
  appId: "1:872232266900:web:7d14506f4a0d67b6749881"
};

// Initialize Firebase
!firebase.apps.length ? initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore();

export {db,firebase};


