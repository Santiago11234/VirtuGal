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

let galleryCards = document.getElementById('gallery-post');


let artArray = [];
await getDocs(collection(db, "gallery")).then(arts => {
     arts.forEach((doc)=>{
       //console.log(doc.id, " => ", doc.data());
       //console.log(doc.data().imageUrl);
       artArray.push({"id": doc.id, "imageUrl": doc.data().imageUrl, "title": doc.data().title, 
       "description": doc.data().description})
    })
     
    let columnCounts = [];
    let thirdColumnCnt = Math.floor((arts.size)/3);
    let numLeft = (arts.size)%3;
    let firstColumnCnt = numLeft === 0? thirdColumnCnt : thirdColumnCnt+1;
    columnCounts.push(firstColumnCnt);
    columnCounts.push(arts.size - thirdColumnCnt);
    columnCounts.push(arts.size);

    let artHtmlOutput = '';
    let artIndex = 0;
    for (let i = 0; i < 3; i++) {
      let artColumnHtmlOutput = `<div class="col-lg-4">`;
      while (artIndex < columnCounts[i]) {
        let art1Id = artArray[artIndex].id;
        let art1Title = artArray[artIndex].title;
        let art1Description = artArray[artIndex].description;
        let art1User = array[artIndex].user;
        let art1ImageUrl = artArray[artIndex++].imageUrl;
        
        artColumnHtmlOutput += `
        <div class="card">
          <div class="shadow-5-strong">
            <img src="${art1ImageUrl}" class="card-img-top" style="margin: auto; width: 100%; padding-top: 5%; padding-left: 5%; padding-right: 5%;
            object-fit: cover; width: 100%; height: 600px">
          </div>
          <div class="card-body shadow-5-strong" id="card-id-${art1Id}">
            <h5 class="card-title">${art1Title}</h5>
            <p class="card-text">${art1Description}</p>
            <br>
            <p class="card-text">"By: " + ${art1User}</p>
            <a href="GalleryArt.html">
              <input type="button" value="COMMENTS" class="btn btn-lg btn-outline-primary" style="margin: 0" id="btn-comments-id-${art1Id}" data-id=${art1Id} data-image-url=${art1ImageUrl}>
            </a>
          </div>
        </div>
        <br>`;
        }
      artColumnHtmlOutput += `</div>`;
      artHtmlOutput += artColumnHtmlOutput;
    }
    galleryCards.innerHTML = artHtmlOutput;

    

    // Add event listener for each art listed in the gallery
    arts.forEach((art) => {      
      let artId = art.id;
      let cardBodyClassId = 'card-id-'+artId;
      let cardBodyElement = document.getElementById(cardBodyClassId);

      cardBodyElement.addEventListener('click', (e) => {

        let artId = e.target.dataset.id;            
        let cmtBtnIsPressed = e.target.id == "btn-comments-id-"+artId;
        let artImageUrl = e.target.getAttribute('data-image-url');

        if (cmtBtnIsPressed) {
          localStorage.setItem('galleryArtImageId', artId);
          localStorage.setItem('galleryArtImageUrl', artImageUrl);
          localStorage.setItem('galleryRendered', true);
        }
      });
    });
});