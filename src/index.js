// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCukfOV87XcdrpsRK5AOgSs_domG-mfS3o",
  authDomain: "virtugal-19636.firebaseapp.com",
  projectId: "virtugal-19636",
  storageBucket: "virtugal-19636.appspot.com",
  messagingSenderId: "910092972395",
  appId: "1:910092972395:web:1a0d98b747cab59c12dc2e",
  measurementId: "G-HWMXN9VM7D"
};
const auth = getAuth(firebaseApp);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(firebaseApp);


onAuthStateChanged(auth, user =>{
    if(user != null){
        console.log('logged in!');

    }else {  
        console.log('No user');
    }
})