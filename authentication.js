document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the entered username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Make the API call
    fetch('https://jsonplaceholder.typicode.com/users')
    
        .then(response => response.json())

        .then(users => {
            // Check if there are a matching username and password(email)
            const valid_user = users.find(u => u.username === username && u.email === password);
            const main = document.querySelector('main');
            let messageBox = document.querySelector('.message-box');

            // Create the message box
            if (!messageBox) {
                messageBox = document.createElement('div');
                messageBox.classList.add('message-box');
                main.appendChild(messageBox);
            }

            // Display if it was either a valid or invalid login
            if (valid_user) {
                messageBox.innerHTML = '<p>Login successful!</p>';
            } else {
                messageBox.innerHTML = '<p>Invalid username or password. Please try again.</p>';
            }
        })

        .catch(error => {
            console.error('The API call was unsuccessful:', error);
            alert("The API call was unsuccessful.");
        });
});
