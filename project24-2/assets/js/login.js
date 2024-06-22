const loginForm = document.getElementById('loginForm');
const nameInput = document.getElementById('name');
const passwordInput = document.getElementById('password');
const formButton = document.getElementById('button');

function check(event) {
    event.preventDefault();

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (passwordInput.value === storedPassword && nameInput.value === storedUsername) {
        localStorage.setItem('login', JSON.stringify(true));
        window.location.pathname = '/index.html';
    } else {
        alert('Не верно введены данные');
    }
}

loginForm.addEventListener('submit', check);



