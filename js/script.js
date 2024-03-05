// variables
let button = document.getElementById("button");
let name = document.getElementById("fullname");
let email = document.getElementById("email");
let message = document.getElementById("message");
let form = document.getElementById("form");

// prevents the form from refreshing when submit is pressed
let formSubmit = document.getElementById("form");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener("submit", handleForm);

// form validation
function validateForm() {

    let collectedData = [];
    let errors = [];


    if (name.value !== "") {
        collectedData.fullname = name.value;
    } else {
        errors.push("Full name is missing");
    };

    if (email.value !== "") {
        collectedData.email = email.value;
    } else {
        errors.push("Email is missing");
    };

    if (message.value !== "") {
        collectedData.message = message.value;
    } else {
        errors.push("Message is missing");
    };


    if (errors.length > 0) {
        console.error("ERRORS:", errors);
    } else {
        console.log("COLLECTED DATA:", collectedData);
        name.value = "";
        email.value = "";
        message.value = "";
    };
}

// submit button
button.addEventListener("click", validateForm);