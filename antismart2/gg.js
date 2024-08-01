async function signIn() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const messageElement = document.getElementById('signInMessage');

    messageElement.textContent = '';

    if (name && email && mobile) {
        if (/^[0-9]{10}$/.test(mobile)) {
            try {
                const response = await fetch('/sign-in', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name, email, mobile })
                });
                if (response.ok) {
                    window.location.href = 'index.html';
                } else {
                    messageElement.textContent = await response.text();
                    messageElement.style.color = '#ff0000';
                }
            } catch (error) {
                messageElement.textContent = 'Error occurred.';
                messageElement.style.color = '#ff0000';
            }
        } else {
            messageElement.textContent = 'Please enter a valid 10-digit mobile number.';
            messageElement.style.color = '#ff0000';
        }
    } else {
        messageElement.textContent = 'Please fill in all fields.';
        messageElement.style.color = '#ff0000';
    }
}

async function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const messageElement = document.getElementById('loginMessage');

    messageElement.textContent = '';

    if (email && password) {
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            if (response.ok) {
                window.location.href = 'index.html';
            } else {
                messageElement.textContent = await response.text();
                messageElement.style.color = '#ff0000';
            }
        } catch (error) {
            messageElement.textContent = 'Error occurred.';
            messageElement.style.color = '#ff0000';
        }
    } else {
        messageElement.textContent = 'Please fill in all fields.';
        messageElement.style.color = '#ff0000';
    }
}
