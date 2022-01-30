function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 8 characters long");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});





function addButton1(){
    var element = document.getElementById('amountOfVotes1');
    var value = element.innerHTML;
    ++value;
    document.getElementById('amountOfVotes1').innerHTML = value;
}
function minusButton1(){
    var element = document.getElementById('amountOfVotes1');
    var value = element.innerHTML;
    --value;
    document.getElementById('amountOfVotes1').innerHTML = value;

}



function addButton2(){
    var element = document.getElementById('amountOfVotes2');
    var value = element.innerHTML;
    ++value;
    document.getElementById('amountOfVotes2').innerHTML = value;
}
function minusButton2(){
    var element = document.getElementById('amountOfVotes2');
    var value = element.innerHTML;
    --value;
    document.getElementById('amountOfVotes2').innerHTML = value;

}




function addButton3(){
    var element = document.getElementById('amountOfVotes3');
    var value = element.innerHTML;
    ++value;
    document.getElementById('amountOfVotes3').innerHTML = value;
}
function minusButton3(){
    var element = document.getElementById('amountOfVotes3');
    var value = element.innerHTML;
    --value;
    document.getElementById('amountOfVotes3').innerHTML = value;

}





function addButton4(){
    var element = document.getElementById('amountOfVotes4');
    var value = element.innerHTML;
    ++value;
    document.getElementById('amountOfVotes4').innerHTML = value;
}
function minusButton4(){
    var element = document.getElementById('amountOfVotes4');
    var value = element.innerHTML;
    --value;
    document.getElementById('amountOfVotes4').innerHTML = value;

}






function addButton5(){
    var element = document.getElementById('amountOfVotes5');
    var value = element.innerHTML;
    ++value;
    document.getElementById('amountOfVotes5').innerHTML = value;
}
function minusButton5(){
    var element = document.getElementById('amountOfVotes5');
    var value = element.innerHTML;
    --value;
    document.getElementById('amountOfVotes5').innerHTML = value;

}