const contactForm = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");
contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || subject === "" || message === "") {
        feedback.textContent = "Please fill in all the fields.";
        return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        feedback.textContent = "Please enter a valid email address.";
        return;
    }
    feedback.textContent =
    "Thank you, "+ name + "! Your message has been received.";
    contactForm.reset();
});