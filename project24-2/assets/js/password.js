document.addEventListener('DOMContentLoaded', () => {
    const changePasswordForm = document.getElementById('changePasswordForm');
    const usernameInput = document.getElementById('username');
    const newPasswordInput = document.getElementById('newPassword');

    function validateInputs() {
        const username = usernameInput.value.trim();
        const newPassword = newPasswordInput.value.trim();

        if (username === '' || newPassword === '') {
            alert('Имя пользователя и пароль не могут быть пустыми');
            return false;
        }
        return true;
    }

    function handleChangePassword(event) {
        event.preventDefault();

        if (validateInputs()) {
            const username = usernameInput.value.trim();
            const newPassword = newPasswordInput.value.trim();

            localStorage.setItem('username', username);
            localStorage.setItem('password', newPassword);

            alert('Пароль успешно изменен');
            window.location.pathname = '/index.html'; 
        }
    }

    changePasswordForm.addEventListener('submit', handleChangePassword);
});
