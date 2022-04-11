import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, collection, onSnapshot } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUw6xp7zoRucjBFqZoJYVO2aNA2q1AsH4",
  authDomain: "try-firebase-bj.firebaseapp.com",
  projectId: "try-firebase-bj",
  storageBucket: "try-firebase-bj.appspot.com",
  messagingSenderId: "830207953207",
  appId: "1:830207953207:web:22a4ef5076f555882b32b2"
};
// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore(); 

