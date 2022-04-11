import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, updateDoc, arrayUnion, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

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

let commentsCard = document.getElementById('comments-list-id');
let commentCardElement = document.getElementById('gallery-art-card-id');
let id = commentCardElement.dataset.id;

const docRef=doc(db, "gallery", id);
const docSnap = await getDoc(docRef);
if(docSnap.exists()) {
  let artComments = docSnap.data().comments;
  let artCommentsHtml = '';
  artComments.slice().reverse().forEach((comment)=>{
    let username = comment.user;
    let postDate = comment.date.toDate().toDateString();
    let postBody = comment.post;
    artCommentsHtml += 
    `<div class="cmt card-body p-3">
      <div class="d-flex flex-start">
        <img
          class="rounded-circle shadow-1-strong me-3"
          src="profile.png"
          alt="avatar"
          width="60"
          height="60"
        />
        <div>
          <h6 class="fw-bold mb-1">&nbsp;&nbsp;&nbsp;${username}</h6>
          <div class="d-flex align-items-center mb-3">
            <p class="mb-0">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${postDate}
              
            </p>
          </div>
          <p class="mb-0">
            &nbsp;&nbsp;&nbsp;${postBody}
          </p>
        </div>
      </div>                
    </div>
    <hr class="my-0" />`;
  });
  commentsCard.innerHTML = artCommentsHtml;
}

let commentsContainer = document.querySelector('.container-comments');
//let commentRoot = document.getElementById('commentRoot');

commentsContainer.addEventListener('click', async (e) => {
    e.preventDefault();
    let postBtnIsPressed = e.target.id == 'post_cmt_btn';
    let commentCardElement = document.getElementById('gallery-art-card-id');
    let id = commentCardElement.dataset.id;
    
    let newCommentValue = document.getElementById("cmtText").value;
    var dateTimeStamp = new Date();
    let newComment = {"user": "user", "post": newCommentValue, "date": dateTimeStamp};

    if (postBtnIsPressed) {
        
        // Get the art data by its id
        const artRef = doc(db, "gallery", id);
        const docSnap = await getDoc(artRef);
        
        if (docSnap.exists()) {
          await updateDoc(artRef, {
              comments: arrayUnion(newComment)
          })
        } else {
          // doc.data() will be undefined in this case
          console.log("There is no such document");
        }
        
    }

})


