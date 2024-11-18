const form = document.querySelector("#contactForm");

let userFeedback = document.querySelector('#textFeedback');
let emailFeedback = document.querySelector('#emailFeedback');
let messageFeedback = document.querySelector('#messageFeedback');
let text = document.querySelector('#name');
let email = document.querySelector('#email');
let message = document.querySelector('#message');

let validText = false;
let validEmail = false;
let validMessage = false;

function nameCheck(){
        userFeedback.textContent = "Please enter your name.";
}

function nameBlur(){
    let name = text.value.split(' ');
    if(name.length == ''){
        name.borderColor = "red";
        userFeedback.textContent = "Please enter your full name.";
    }
    else if(name.length < 2){
        name.borderColor = "red";
        userFeedback.textContent = 'You did not enter your full name (First and Last). Please try again.';
    }
    else{
        name.borderColor = "green";
        userFeedback.textContent = '';
        validText = true;
    }
}

// event listener for text(name) field
text.addEventListener('focus', nameCheck, false);
text.addEventListener('blur', nameBlur, false);


function emailCheck(){
    emailFeedback.textContent = "Please enter your email address.";
}

function emailBlur(){
    let mail = email.value.trim();
    const patt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(mail == ''){
        mail.borderColor = "red";
        emailFeedback.textContent = "Please enter your email address.";
    }
    else if(!patt.test(mail)){
        mail.borderColor = "red";
        emailFeedback.textContent = 'You did not enter a valid email address. Please try again.';

    }
    else{
        mail.borderColor = "green";
        emailFeedback.textContent = '';
        validEmail = true;
    }
}

// event listener for email field
email.addEventListener('focus', emailCheck, false);
email.addEventListener('blur', emailBlur, false);


function messageCheck(){
    messageFeedback.textContent = "Please enter your message.";
}

function messageBlur(){
    let msg = message.value.split(' ');
    if(msg == ''){
        msg.borderColor = "red";
        messageFeedback.textContent = "Please enter your message.";
    }
    else if(msg.length < 2){
        msg.borderColor = "red";
        messageFeedback.textContent = 'please write in more detail';

    }
    else{
        msg.borderColor = "green";
        messageFeedback.textContent = '';
        validMessage = true;
    }
}

message.addEventListener('focus', messageCheck, false);
message.addEventListener('blur', messageBlur, false);

form.addEventListener("submit", function (event) {
    // Prevent submission if any field is invalid
    if (!validText || !validEmail || !validMessage) {
        event.preventDefault(); // Prevent form submission
        alert("Please correct the errors in the form before submitting.");
    } else {
        alert("form submitted successfully");
    }
});