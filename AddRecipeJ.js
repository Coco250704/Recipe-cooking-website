// Add an event listener to the form for the 'submit' event
document.querySelector('.add-page-form').addEventListener('submit', function(e) { 
    // Prevent the default form submission (which would reload the page)
    e.preventDefault();
    
    // Get the values from the form fields: title, description, and URL
    const title = e.target.title.value; // Gets the value of the title input
    const description = e.target.description.value; // Gets the value of the description textarea
    const url = e.target.url.value; // Gets the value of the URL input

    // Display a simple alert message with the collected values
    alert(`Thank you for your submission!\n\nTitle: ${title}\nDescription: ${description}\nURL: ${url || "No URL provided"}`);

    // Reset the form fields after the submission, clearing them for the next entry
    e.target.reset();
});
