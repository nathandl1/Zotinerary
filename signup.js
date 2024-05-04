document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    if (username.trim() !== '' && password.trim() !== '') {
        // Save the username and password to localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        window.location.href = 'login.html';
    } else {
        errorMessage.textContent = 'Please fill out all fields.';
    }
});
