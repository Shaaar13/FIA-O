document.addEventListener('DOMContentLoaded', () => {
    const authScreen = document.getElementById('authScreen');
    const app = document.getElementById('app');
    const demoLoginBtn = document.getElementById('demoLogin');

    if (demoLoginBtn) {
        demoLoginBtn.addEventListener('click', () => {
            if (authScreen) authScreen.style.display = 'none';
            if (app) app.style.display = 'block';
        });
    }

    const authForm = document.getElementById('authForm');
    if (authForm) {
        authForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (authScreen) authScreen.style.display = 'none';
            if (app) app.style.display = 'block';
        });
    }
});