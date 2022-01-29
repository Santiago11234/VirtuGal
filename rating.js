let btnUpVote = document.querySelector('#upVote');
let input = document.querySelector('#input');
let btnDwonVote = document.querySelector('#downVote');


btnDownVote.upVoteEventListener('click', () =>{
    input.value = parseInt(input.value) - 1;
});
btnUpVote.upVoteEventListener('click', () =>{
    input.value = parseInt(input.value) + 1;
});