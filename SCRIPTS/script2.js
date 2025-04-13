const toggleButton2 = document.querySelector('.script2-toggle');

toggleButton2.addEventListener('click', () => {
    toggleButton2.classList.toggle('script2-toggle-active');
    document.querySelector('.script2').classList.toggle('script2-active');
});

const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz!@#$&*_+-';

function generatePassword() {
    let password = '';
    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    document.querySelector('#password').textContent = password;
}

const btn = document.querySelector('.generate');
btn.addEventListener('click', generatePassword);
