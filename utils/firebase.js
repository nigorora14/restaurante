import firebase from 'firebase/app'
import 'firebase/firestore'


  const firebaseConfig = {
    apiKey: "AIzaSyBlJVINryT45NRpkbjbxEURfne1lLuv3OI",
    authDomain: "restaurante-7daf1.firebaseapp.com",
    projectId: "restaurante-7daf1",
    storageBucket: "restaurante-7daf1.appspot.com",
    messagingSenderId: "678154271320",
    appId: "1:678154271320:web:ee6c43787e9a9ca779282d"
  }
  // Initialize Firebase
 export const firebaseApp = firebase.initializeApp(firebaseConfig);