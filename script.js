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

/* Copy Button */
const copyIcon = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1" shape-rendering="crispEdges" aria-hidden="true"><rect x="6.5" y="2.5" width="7" height="7"></rect><rect x="2.5" y="6.5" width="7" height="7" fill="var(--code-background)"></rect></svg>';
const copiedIcon = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1" shape-rendering="crispEdges" aria-hidden="true"><path d="M3.5 8.5 6.5 11.5 12.5 5.5"></path></svg>';

document.querySelectorAll('div.highlight').forEach((block) => {
	const code = block.querySelector('pre code');
	if (!code) return;

	const copyButton = document.createElement('button');
	copyButton.type = 'button';
	copyButton.className = 'copy-button';
	copyButton.innerHTML = copyIcon;
	copyButton.setAttribute('aria-label', 'Copy code');

	let resetTimer;
	copyButton.addEventListener('click', async () => {
		try {
			await navigator.clipboard.writeText(code.textContent.replace(/\n$/, ''));
			copyButton.innerHTML = copiedIcon;
			copyButton.setAttribute('aria-label', 'Copied');
			copyButton.classList.remove('failed');
		} catch {
			copyButton.setAttribute('aria-label', 'Copy failed');
			copyButton.classList.add('failed');
		}
		clearTimeout(resetTimer);
		resetTimer = setTimeout(() => {
			copyButton.innerHTML = copyIcon;
			copyButton.setAttribute('aria-label', 'Copy code');
			copyButton.classList.remove('failed');
		}, 375);
	});

	block.appendChild(copyButton);
});