document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById('signup-form');
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirm-password").value;
        var email = document.getElementById("email").value;

        var usernamePattern = /^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/;
        var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+[\]{}|;:'",.<>?/`~.])[A-Za-z\d!@#$%^&*()-_=+[{\]};:'",.<>?/`~.]{8,}$/;
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        var messageBox = document.querySelector('.message-box');
        if (!messageBox) {
            messageBox = document.createElement('div');
            messageBox.classList.add('message-box');
            document.querySelector('main').appendChild(messageBox);
        }

        var errorMessage = "";

        if (!usernamePattern.test(username)) {
            errorMessage += "Username must be between 3 and 20 characters, alphanumeric, hyphens, underscores; must start with a letter<br>";
        }
        if (!passwordPattern.test(password)) {
            errorMessage += "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character<br>";
        }
        if (password !== confirmPassword) {
            errorMessage += "Confirm password must match the password<br>";
        }
        if (!emailPattern.test(email)) {
            errorMessage += "Email must be a valid email address format<br>";
        }

        if (errorMessage !== "") {
            messageBox.innerHTML = "<p>" + errorMessage + "</p>";
        } else {
            messageBox.innerHTML = "<p>Signup successful!</p>";
        }
    });
});
