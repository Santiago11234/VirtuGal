let files = [];
var reader = new FileReader();
let inputElement = document.getElementById("input-file-select");
let fileExt = '';
let fileName = '';
inputElement.onchange=e => {
files = e.target.files;
var fileSelected = files[0].name;
//console.log('~~~~~~~~~~~image selected for upload' + files[0].name);
let tempExt = fileSelected.split('.');
fileExt = '.' + tempExt.slice((tempExt.length -1), (tempExt.length));
fileName = tempExt.slice(0, -1).join('.');

//console.log(ext + '###########' + fname);
reader.readAsDataURL(files[0]);
}

reader.onload = function() {
//let srcimg = reader.result;
console.log("srcimg");
}

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, getDoc, updateDoc, arrayUnion, setDoc, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import {getStorage, ref as sRef, uploadBytesResumable, getDownloadURL} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-storage.js";

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

let submitBtn = document.getElementById('art-submit-btn');
submitBtn.onclick = async function uploadProcess() {

let imgToUpload = files[0];
const metaData = {
    contentType: imgToUpload.type
}

const storage = getStorage();
const storageRef = sRef(storage, "Images/"+imgToUpload.name);
const uploadTask = uploadBytesResumable(storageRef, imgToUpload, metaData);

uploadTask.on('state-changed', (snapshot)=>{
    let progLabel = document.getElementById('upload-progress')
    let progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;   
    progLabel.innerHTML="uploaded "+ progress + "%";          
},
(error)=>{
    alert('error: image not uploaded');
},
()=>{
    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL)=>{
    let artistText = document.getElementById('user-name-id').value;
    let titleText = document.getElementById("title-id").value;
    let descriptionText = document.getElementById("description-id").value;
    let artDocRef = await addDoc(collection(db, "gallery"), {
        artist: artistText,
        title: titleText,
        description: descriptionText,
        date: serverTimestamp(),
        imageUrl: downloadURL,
        comments: []
    });
    console.log('Document written with ID: ', artDocRef.id);                
    });
});
}