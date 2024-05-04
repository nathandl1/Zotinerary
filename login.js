document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    // Retrieve the stored username and password from localStorage
    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        // Redirect to home page
        window.location.href = 'home.html';
    } else {
        errorMessage.textContent = 'Invalid username or password. Please try again.';
    }
});
