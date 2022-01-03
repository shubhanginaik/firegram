import firebase from 'firebase';
import 'firebase/storage';
 import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRbZEVRkGyOj_TOMWlBMvp2Gd-Sb-EWD8",
    authDomain: "shubhangi-firegram.firebaseapp.com",
    projectId: "shubhangi-firegram",
    storageBucket: "shubhangi-firegram.appspot.com",
    messagingSenderId: "218483925774",
    appId: "1:218483925774:web:8f97d269ddf51586c52d5f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage= firebase.storage();
  const projectFirestore=firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage,projectFirestore,timestamp};