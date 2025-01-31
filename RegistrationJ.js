// Adding an event listener for form submission on the registration form
document.getElementById("registration-form").addEventListener("submit", function(e) { 
    e.preventDefault(); // Prevent the form from submitting in the default way

    let errors = []; // Initialize an empty array to store validation errors
    const email = document.getElementById("email").value; // Get the value of the email input
    const password = document.getElementById("password").value; // Get the value of the password input
    const confirmPassword = document.getElementById("confirm-password").value; // Get the value of the confirm password input

    // Validate the email format using a regular expression
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.push("Invalid email format."); // Add error if the email format is invalid
    }

    // Check if the password is at least 8 characters long
    if (password.length < 8) {
        errors.push("Password must be at least 8 characters long."); // Add error if password is too short
    }

    // Check if the password matches the confirmation password
    if (password !== confirmPassword) {
        errors.push("Passwords do not match."); // Add error if the passwords do not match
    }

    // If there are any validation errors, alert the user and stop further execution
    if (errors.length > 0) {
        alert(errors.join("\n")); // Show the validation errors as a single alert
        return; // Stop the function execution if there are errors
    }

    // If no errors, show a success message
    alert("Registration Successful!");
});

// Function to export form data to an Excel file
function exportToExcel() {
    const form = document.getElementById("registration-form"); // Get the form element
    const formData = new FormData(form); // Get all the form data

    // Define the headers for the Excel file
    const headers = ["First Name", "Last Name", "Email"];
    
    // Get the values of the relevant form fields
    const values = [
        formData.get("fname"), // First Name
        formData.get("lname"), // Last Name
        formData.get("email")  // Email
    ];

    // Combine headers and values into a data array
    const data = [headers, values];
    
    // Convert the data array to a worksheet using SheetJS
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    
    // Create a new workbook
    const workbook = XLSX.utils.book_new();
    
    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "User Data");

    // Export the workbook as an Excel file
    XLSX.writeFile(workbook, "User_Registration_Data.xlsx");
}

// Function to reset the form to its initial state
function resetForm() {
    document.getElementById("registration-form").reset(); // Reset the form inputs to their default values
}

// Adding event listener for showing the login form when 'show-login' is clicked
document.getElementById('show-login').addEventListener('click', function() {
    document.querySelector('.slider').style.transform = 'translateX(0)'; // Slide the slider to show the login form
});

// Adding event listener for showing the registration form when 'show-register' is clicked
document.getElementById('show-register').addEventListener('click', function() {
    document.querySelector('.slider').style.transform = 'translateX(-50%)'; // Slide the slider to show the registration form
});
