// get the contact form
const contactForm = document.getElementById("contactForm");

// get form fields
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

// get error message areas
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const subjectError = document.getElementById("subjectError");
const messageError = document.getElementById("messageError");

// get success message
const successMessage = document.getElementById("successMessage");


// listen for form submission
contactForm.addEventListener("submit", function(event) {

    // stop the page from refreshing
    event.preventDefault();


    // clear previous messages
    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";


    // get trimmed values
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();


    // validation status
    let isValid = true;


    // validate Full Name
    if (name === "") {

        nameError.textContent = "Please enter your full name.";

        isValid = false;

    } else if (name.length < 3) {

        nameError.textContent = "Please enter a valid full name.";

        isValid = false;

    }


    // validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        emailError.textContent = "Please enter your email address.";

        isValid = false;

    } else if (!emailPattern.test(email)) {

        emailError.textContent = "Please enter a valid email address.";

        isValid = false;

    }


    // validate Subject
    if (subject === "") {

        subjectError.textContent = "Please enter a subject.";

        isValid = false;

    } else if (subject.length < 5) {

        subjectError.textContent =
            "Subject must be at least 5 characters.";

        isValid = false;

    }


    // validate Message
    if (message === "") {

        messageError.textContent = "Please enter your message.";

        isValid = false;

    } else if (message.length < 10) {

        messageError.textContent =
            "Message must be at least 10 characters.";

        isValid = false;

    }


    // display success message
    if (isValid) {

        successMessage.textContent =
            "✓ Message sent successfully! Thank you for contacting me";

        // clear the form
        contactForm.reset();
    }

});