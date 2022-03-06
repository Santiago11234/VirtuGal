document.addEventListener("DOMContentLoaded", () => {
    const cmtPg1 = document.querySelector("#comments-page-1");
    const cmtPg2 = document.querySelector("#comments-page-2");

    document.querySelector("#link-comments-page-1").addEventListener("click", e => {
        cmtPg1.classList.remove("form--hidden");
        cmtPg2.classList.add("form--hidden");
    });

    document.querySelector("#link-comments-page-2").addEventListener("click", e => {
        cmtPg1.classList.add("form--hidden");
        cmtPg2.classList.remove("form--hidden");
    });
});

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
    node.innerHTML = '<div class="cmt card-body p-3"><div class="d-flex flex-start"><img class="rounded-circle shadow-1-strong me-3" src="profile.png" alt="avatar" width="60" height="60"/><div><h6 class="fw-bold mb-1">&nbsp;&nbsp;&nbsp;Name</h6><div class="d-flex align-items-center mb-3"><p class="mb-0">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Month Day, Year</p></div><p class="mb-0">&nbsp;&nbsp;&nbsp;' + cmt; + '</p>';
    node.innerHTML += '</div></div><hr class="my-0"/>';

    var numCmts = $('.cmt').length;

    if(numCmts < 3) {
    document.getElementById("commentRoot").prepend(node);
    } else if (numCmts < 6){
    document.getElementById("commentRoot2").prepend(node);
    } else if (numCmts < 9){
    document.getElementById("commentRoot3").prepend(node);
    }
    
}