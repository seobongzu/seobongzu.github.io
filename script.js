/* Search */
const searchInput = document.querySelector('.search');

searchInput.addEventListener('focus', () => {
    searchInput.placeholder = 'search...';
});

searchInput.addEventListener('blur', () => {
    searchInput.placeholder = 'seobongzu';
});

searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const searchQuery = searchInput.value.trim();
        if (searchQuery) {
            localStorage.setItem('searchQuery', searchQuery);
            window.location.href = `/search/`;
        } else {
            window.location.href = '/';
        }
    }
});

/* Dark Mode */
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const logoImg = document.getElementById('logo-img');

const logoLight = '/assets/logos/lightLogo.png';
const logoDark = '/assets/logos/darkLogo.png';

const setTheme = (theme) => {
    const isDark = theme === 'dark';

    body.classList.toggle('dark-mode', isDark);
    logoImg.src = isDark ? logoDark : logoLight;

    localStorage.setItem('theme', theme);
};

const initialTheme = localStorage.getItem('theme') || 'light';
setTheme(initialTheme);

darkModeToggle.addEventListener('click', () => {
    const newTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
    setTheme(newTheme);
});