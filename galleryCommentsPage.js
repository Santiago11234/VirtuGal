

/*
let commentRoot = document.getElementById('commentRoot');

//const url = 'http://localhost:5500/api/gallery/';

$('textarea').keyup(function() {
var characterCount = $(this).val().length,
    current = $('#current'),
    maximum = $('#maximum'),
    theCount = $('#count');
    current.text(characterCount);
});

function cmtFunction(){
    var cmt = document.getElementById("cmtText").value;
    
    const node = document.createElement("div");
    node.innerHTML = '<div class="card-body p-4"><div class="d-flex flex-start"><img class="rounded-circle shadow-1-strong me-3" src="profile.png" alt="avatar" width="60" height="60"/><div><h6 class="fw-bold mb-1">&nbsp;&nbsp;&nbsp;Name</h6><div class="d-flex align-items-center mb-3"><p class="mb-0">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Month Day, Year</p></div><p class="mb-0">&nbsp;&nbsp;&nbsp;' + cmt; + '</p>';
    node.innerHTML += '</div></div><hr class="my-0"/>';
    
    document.getElementById("commentRoot").prepend(node);
}
 

btnPostComment.addEventListener('click', (e)=>{
        var cmt = document.getElementById("cmtText").value;
    
    const node = document.createElement("div");
    node.innerHTML = '<div class="card-body p-4"><div class="d-flex flex-start"><img class="rounded-circle shadow-1-strong me-3" src="profile.png" alt="avatar" width="60" height="60"/><div><h6 class="fw-bold mb-1">&nbsp;&nbsp;&nbsp;Name</h6><div class="d-flex align-items-center mb-3"><p class="mb-0">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Month Day, Year</p></div><p class="mb-0">&nbsp;&nbsp;&nbsp;' + cmt; + '</p>';
    node.innerHTML += '</div></div><hr class="my-0"/>';
    
    document.getElementById("commentRoot").prepend(node);
})
*/

// Update the image url and image Id accordingly so that the post comments can work
let imageUrlElement = document.getElementById('gallery-art-image-url');
let commentCardElement = document.getElementById('gallery-art-card-id');

let imageUrl = 'image4.jpg'
if(localStorage) {
    console.log(localStorage);

    imageUrl = localStorage.getItem('galleryArtImageUrl');
    let imageId = localStorage.getItem('galleryArtImageId');
    console.log(imageUrl);
    console.log(imageId);

    imageUrlElement.src = imageUrl;
    commentCardElement.setAttribute('data-id', imageId);
}



/*
commentsContainer.addEventListener('click', (e) => {
    e.preventDefault();
    let postBtnIsPressed = e.target.id == 'post_cmt_btn';
    let id = commentRoot.parentElement.dataset.id;
    let commentsAddNew = [];
    let newcomment = document.getElementById("cmtText").value;

    if (postBtnIsPressed) {
        // Get the data for the art by its id
        fetch(`${url}/${id}`, {
            method: 'GET'
        })
        .then(res=>res.json())
        .then(data => {
            commentsAddNew = data.comments;
            commentsAddNew.push({"user": "me", "body": newcomment});
            data.comments = commentsAddNew;
            console.log(data);
            
            // Update the comments
            fetch(`${url}/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res=>res.json())
        })
    }

})
*/