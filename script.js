// Form validation and submission script
const form = document.getElementById('contact-form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thanks ${name}, your message has been sent!`);
        form.reset();
    } else {
        alert("Please fill in all the fields.");
    }
});
