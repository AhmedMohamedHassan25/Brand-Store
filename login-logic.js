const users = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" }
];

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = users.find(u => u.username === username && u.password === password);
    const message = document.getElementById('message');

    if (user) {
        message.textContent = 'Login successful!';
        message.style.color = 'green';
    } else {
        message.textContent = 'Invalid username or password.';
        message.style.color = 'red';
    }
});

document.getElementById('registerBtn').addEventListener('click', function() {
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.register-container').style.display = 'block';
});

document.getElementById('loginBtn').addEventListener('click', function() {
    document.querySelector('.login-container').style.display = 'block';
    document.querySelector('.register-container').style.display = 'none';
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const newUser = { username: newUsername, password: newPassword };
    const registerMessage = document.getElementById('registerMessage');

    if (users.find(u => u.username === newUsername)) {
        registerMessage.textContent = 'Username already exists.';
        registerMessage.style.color = 'red';
    } else {
        users.push(newUser);
        registerMessage.textContent = 'Registration successful! Please log in.';
        registerMessage.style.color = 'green';
    }
});