// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUw6xp7zoRucjBFqZoJYVO2aNA2q1AsH4",
  authDomain: "try-firebase-bj.firebaseapp.com",
  projectId: "try-firebase-bj",
  storageBucket: "try-firebase-bj.appspot.com",
  messagingSenderId: "830207953207",
  appId: "1:830207953207:web:22a4ef5076f555882b32b2"
};


if(document.getElementById('button').clicked == true)
{
    if(document.getElementById("user_div") == null) {
        window.location = "login.html";
    }
}