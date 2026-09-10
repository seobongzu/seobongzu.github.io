/* Search */
const searchInput = document.querySelector('.search');

searchInput.addEventListener('focus', () => {
	searchInput.placeholder = 'search...';
});

searchInput.addEventListener('blur', () => {
	searchInput.placeholder = 'seobongzu';
});

searchInput.addEventListener('keydown', (event) => {
	if (event.isComposing) return;
	if (event.key === 'Enter') {
		const searchQuery = searchInput.value.trim();
		if (searchQuery) {
			localStorage.setItem('searchQuery', searchQuery);
			window.location.href = `/search/`;
		} else {
			searchInput.blur();
		}
	}
});

/* Dark Mode */
const darkModeToggle = document.getElementById('dark-mode-toggle');

const setTheme = (theme) => {
	document.documentElement.classList.toggle('dark-mode', theme === 'dark');
	localStorage.setItem('theme', theme);
};

const systemTheme = matchMedia('(prefers-color-scheme: dark)');
const initialTheme = localStorage.getItem('theme') || (systemTheme.matches ? 'dark' : 'light');
document.documentElement.classList.toggle('dark-mode', initialTheme === 'dark');

addEventListener('pageshow', (event) => {
	if (event.persisted) {
		const theme = localStorage.getItem('theme') || (systemTheme.matches ? 'dark' : 'light');
		document.documentElement.classList.toggle('dark-mode', theme === 'dark');
	}
});

systemTheme.addEventListener('change', (event) => {
	localStorage.removeItem('theme');
	document.documentElement.classList.toggle('dark-mode', event.matches);
});

if (darkModeToggle) {
	darkModeToggle.addEventListener('click', () => {
		const newTheme = document.documentElement.classList.contains('dark-mode') ? 'light' : 'dark';
		setTheme(newTheme);
	});
}