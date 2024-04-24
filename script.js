document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    // Example of basic validation
    if (username === 'username' && password === 'password') {
        // Successful login
        window.location.href = 'home.html'; // Redirect to home page
    } else {
        // Display error message
        errorMessage.textContent = 'Invalid username or password. Please try again.';
    }
});
