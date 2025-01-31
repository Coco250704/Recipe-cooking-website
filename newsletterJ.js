// Add an event listener to the newsletter form for the 'submit' event
document.querySelector('.newsletter-form').addEventListener('submit', function(e) { 

    e.preventDefault(); // Prevents the default form submission behavior (page reload)

    const email = e.target.email.value; // Get the value entered in the email input field

    // Check if the email input is not empty
    if (email) {
        alert(`Thank you for subscribing, ${email}!`); // If email exists, show a thank-you message
        e.target.reset(); // Reset the form to clear the input field after submission
    } else {
        alert('Please enter a valid email address.'); // If email is empty, show an error message
    }
});
