// form contact us

// I changed the code to return fragment instead of the card "div"
// because fragment is more efficient than div and also lightweight container
export default function createContactCard() {
    const fragment = document.createDocumentFragment();

    const contactCard = document.createElement("div");
    contactCard.classList = "card";

    const contactTitle = document.createElement("h2");
    contactTitle.textContent = "Contact Us";
    contactCard.appendChild(contactTitle);

    const form = document.createElement("form");
    contactCard.appendChild(form);

    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email:";
    form.appendChild(emailLabel);

    const emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("name", "email");
    form.appendChild(emailInput);

    const messageLabel = document.createElement("label");
    messageLabel.textContent = "Message:";
    form.appendChild(messageLabel);

    const messageInput = document.createElement("textarea");
    messageInput.setAttribute("name", "message");
    form.appendChild(messageInput);

    const messageError = document.createElement("span");
    messageError.textContent = "Message cannot be empty!";
    messageError.classList.add("error-message");
    messageError.style.visibility = "hidden";

    messageInput.parentNode.insertBefore(messageError, messageInput.nextElementSibling);

    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    form.appendChild(submitButton);

    addContactCardEvents(submitButton, emailInput, messageInput, form);

    // append contact card to fragment
    fragment.appendChild(contactCard);
    return fragment; // here returning the fragment
}

function addContactCardEvents(submitButton, emailInput, messageInput, form) {

    submitButton.addEventListener("click", (event) => {
        event.preventDefault();
        let result = validationForm(emailInput, messageInput);
        if (result) {
            alert("Thank you for your message!");
            scrollTo({ top: 0, behavior: "smooth" });
            form.reset();
        }
    });

    emailInput.addEventListener("input", () => {
        emailInput.classList.remove("error");
    });

    messageInput.addEventListener("input", () => {
        messageInput.classList.remove("error");
        messageInput.nextElementSibling.style.visibility = "hidden";
    });
}

function validationForm(emailInput, messageInput) {
    let result = true;
    if (!isValidEmail(emailInput.value)) {
        emailInput.classList.add("error");
        result = false;
    }

    if (isEmptyText(messageInput.value)) {
        messageInput.classList.add("error");
        messageInput.nextElementSibling.style.visibility = "visible";
        result = false;
    }

    return result;
}

function isValidEmail(email) {
    if (isEmptyText(email)) {
        return false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

function isEmptyText(input) {
    return typeof input === "string" && input.trim() === "";
}