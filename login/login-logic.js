
// validate username
function isValidUsername(username) {
    return /^[a-z]{3,}$/.test(username);
}

// validate phone number
function isValidPhone(phone) {
    return /^\d{11}$/.test(phone);
}

// validate password
function isValidPassword(password) {
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/.test(password);
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const message = document.getElementById('loginMessage');
    
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find(u => u.email === email && u.password === password);

    if (user) {
        message.textContent = 'Login successful!';
        message.style.color = 'green';
        window.location.href = 'index.html'; // Redirect on success
    } else {
        message.textContent = 'Invalid email or password.';
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
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const gender = document.getElementById('Gender').value;
    const phone = document.getElementById('phone').value;
    const city = document.getElementById('city').value;
    const detailedAddress = document.getElementById('detailedAddress').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const registerMessage = document.getElementById('registerMessage');

    if (!isValidUsername(username)) {
        registerMessage.textContent = 'Username must be at least 3 lowercase letters.';
        registerMessage.style.color = 'red';
        return;
    }
    if (!isValidPhone(phone)) {
        registerMessage.textContent = 'Phone number must be 11 digits.';
        registerMessage.style.color = 'red';
        return;
    }
    if (!isValidPassword(password)) {
        registerMessage.textContent = 'Password must be 8-30 characters long, with at least one uppercase letter, one lowercase letter, one number, and one special character.';
        registerMessage.style.color = 'red';
        return;
    }
    if (password !== confirmPassword) {
        registerMessage.textContent = 'Passwords do not match.';
        registerMessage.style.color = 'red';
        return;
    }
    if (!city) {
        registerMessage.textContent = 'Please select your city.';
        registerMessage.style.color = 'red';
        return;
    }

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    if (storedUsers.find(u => u.email === email)) {
        registerMessage.textContent = 'Email already exists.';
        registerMessage.style.color = 'red';
    
    } 
    else if (storedUsers.find(u => u.phone === phone)) {
        registerMessage.textContent = 'Phone number already exists.';
        registerMessage.style.color = 'red';
    }
    else {
        storedUsers.push({ firstName, lastName, username , email , phone , gender , city , detailedAddress , password });
        localStorage.setItem('users', JSON.stringify(storedUsers));
        registerMessage.textContent = 'Registration successful! Please log in.';
        registerMessage.style.color = 'green';
        window.location.href = 'https://google.com'; 
   
    }
});
