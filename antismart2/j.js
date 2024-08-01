function signIn() {
    // Get form elements for Sign In
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const messageElement = document.getElementById('signInMessage');

    // Clear previous messages
    messageElement.textContent = '';

    // Validate input fields
    if (name && email && mobile) {
        // Check if mobile number is exactly 10 digits
        if (/^[0-9]{10}$/.test(mobile)) {
            // Redirect to home page
            window.location.href = 'index.html';
        } else {
            messageElement.textContent = 'Please enter a valid 10-digit mobile number.';
            messageElement.style.color = '#ff0000'; // Red for error
        }
    } else {
        messageElement.textContent = 'Please fill in all fields.';
        messageElement.style.color = '#ff0000'; // Red for error
    }
}

function login() {
    // Get form elements for Login
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const messageElement = document.getElementById('loginMessage');

    // Clear previous messages
    messageElement.textContent = '';

    // Validate input fields
    if (email && password) {
        // Redirect to home page
        window.location.href = 'index.html';
    } else {
        messageElement.textContent = 'Please fill in all fields.';
        messageElement.style.color = '#ff0000'; // Red for error
    }
}