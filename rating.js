/*
function rating(){

let btnUpVote = document.querySelector(".btn-upVote");
let  input = document.querySelector('#input');
let btnDownVote = document.querySelector('#downVote');


btnDownVote.upVoteEventListener('click', () =>{
    input.value = parseInt(input.value) - 1;
});
btnUpVote.upVoteEventListener('click', () =>{
    input.value = parseInt(input.value) + 1;
});
}
*/


function addButton(){
    var element = document.getElementById('amountOfVotes');
    var value = element.innerHTML;
    ++value;
    document.getElementById('amountOfVotes').innerHTML = value;
}
function minusButton(){
    var element = document.getElementById('amountOfVotes');
    var value = element.innerHTML;
    --value;
    document.getElementById('amountOfVotes').innerHTML = value;

}