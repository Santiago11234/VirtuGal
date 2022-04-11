//Update image URL and ID accordingly so post comment page works
let imageUrlElement = document.getElementById('gallery-art-image-url');
let commentCardElement = document.getElementById('gallery-art-card-id');

let imageUrl = ''
if(localStorage) {
    console.log(localStorage);

    imageUrl = localStorage.getItem('galleryArtImageUrl');
    let imageId = localStorage.getItem('galleryArtImageId');
    console.log(imageUrl);
    console.log(imageId);

    imageUrlElement.src = imageUrl;
    commentCardElement.setAttribute('data-id', imageId);
}