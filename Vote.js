// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8NLhC93ieZGHVNp-DYD5reOa8-4mAik8",
  authDomain: "virtugal-f1e22.firebaseapp.com",
  projectId: "virtugal-f1e22",
  storageBucket: "virtugal-f1e22.appspot.com",
  messagingSenderId: "863050800031",
  appId: "1:863050800031:web:6e6171740090cfb0e0fbaa",
  measurementId: "G-7PQXHBHR48"
};


if(document.getElementById('button').clicked == true)
{
    if(document.getElementById("user_div") == null) {
        window.location = "login.html";
    }
}