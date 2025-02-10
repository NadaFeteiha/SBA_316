// form contact us
const submitButton = document.createElement("button");
const form = document.createElement("form");
const emailInput = document.createElement("input");
const messageInput = document.createElement("textarea");


export default function createContactCard() {
    const contactCard = document.createElement("div");
    contactCard.classList = "card";

    const contactTitle = document.createElement("h2");
    contactTitle.textContent = "Contact Us";
    contactCard.appendChild(contactTitle);

    contactCard.appendChild(form);

    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email:";
    form.appendChild(emailLabel);

    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("name", "email");
    form.appendChild(emailInput);

    const messageLabel = document.createElement("label");
    messageLabel.textContent = "Message:";
    form.appendChild(messageLabel);

    messageInput.setAttribute("name", "message");
    form.appendChild(messageInput);


    submitButton.textContent = "Submit";
    form.appendChild(submitButton);

    return contactCard;
}

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    let result = validationForm();
    if (result) {
        alert("Thank you for your message!");
        form.reset();
    }
});

function validationForm() {
    
    if (!isValidEmail(emailInput.value)) {
        alert("Invalid email address");
        return false;
    }

    if (messageInput.value === "") {
        alert("Message cannot be empty");
        return false;
    }

    return true
}


function isValidEmail(email) {
    if (email === "") {
        return false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);

}