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

// Function to check if the name field is empty
function nameCheck(){
        userFeedback.textContent = "Please enter your name.";
}

// blur event for name field
function nameBlur(){
    let name = text.value.split(' ');
    if(name.length == ''){
        text.borderColor = "red";
        userFeedback.textContent = "Please enter your full name.";
    }
    else if(name.length < 2){
        text.borderColor = "red";
        userFeedback.textContent = 'You did not enter your full name (First and Last). Please try again.';
    }
    else{
        userFeedback.textContent = '';
        validText = true;
    }
}

// event listener for text(name) field
text.addEventListener('focus', nameCheck, false);
text.addEventListener('blur', nameBlur, false);

// Function to check if the email field is empty
function emailCheck(){
    emailFeedback.textContent = "Please enter your email address.";
}

// blur event for email field
function emailBlur(){
    let mail = email.value.trim();
    // regular expression for email validation
    const patt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(mail == ''){
        email.borderColor = "red";
        emailFeedback.textContent = "Please enter your email address.";
    }
    // check if email is valid
    else if(!patt.test(mail)){
        email.borderColor = "red";
        emailFeedback.textContent = 'You did not enter a valid email address. Please try again.';

    }
    else{
        emailFeedback.textContent = '';
        validEmail = true;
    }
}

// event listener for email field
email.addEventListener('focus', emailCheck, false);
email.addEventListener('blur', emailBlur, false);

// Function to check if the message field is empty
function messageCheck(){
    messageFeedback.textContent = "Please enter your message.";
}

// blur event for message field
function messageBlur(){
    let msg = message.value.split(' ');
    if(msg == ''){
        message.borderColor = "red";
        messageFeedback.textContent = "Please enter your message.";
    }
    else if(msg.length < 2){
        message.borderColor = "red";
        messageFeedback.textContent = 'please write in more detail';

    }
    else{
        messageFeedback.textContent = '';
        validMessage = true;
    }
}

// event listener for message field
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