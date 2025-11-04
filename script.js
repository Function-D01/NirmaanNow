// Small UI script for NirmaanNow
document.addEventListener('DOMContentLoaded', function() {
		// Nav toggle for small screens (class-based toggle for better control)
		const toggle = document.querySelector('.nav-toggle');
		const nav = document.getElementById('primary-nav');
		if (toggle && nav) {
			toggle.addEventListener('click', (e) => {
				const expanded = toggle.getAttribute('aria-expanded') === 'true';
				toggle.setAttribute('aria-expanded', String(!expanded));
				nav.classList.toggle('open');
				e.stopPropagation();
			});

			// close nav when a link is clicked (mobile)
			nav.addEventListener('click', (e) => {
				if (e.target.tagName === 'A') {
					nav.classList.remove('open');
					toggle.setAttribute('aria-expanded', 'false');
				}
			});

			// close when clicking outside
			document.addEventListener('click', (e) => {
				if (!nav.contains(e.target) && !toggle.contains(e.target)) {
					if (nav.classList.contains('open')) {
						nav.classList.remove('open');
						toggle.setAttribute('aria-expanded', 'false');
					}
				}
			});

			// close on ESC key
			document.addEventListener('keydown', (e) => {
				if (e.key === 'Escape' && nav.classList.contains('open')) {
					nav.classList.remove('open');
					toggle.setAttribute('aria-expanded', 'false');
					toggle.focus();
				}
			});
		}

	// Footer year
	const y = new Date().getFullYear();
	const el = document.getElementById('year');
	if (el) el.textContent = y;

	// Simple form feedback (no backend)
	const form = document.querySelector('.contact-form');
	if (form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			const btn = form.querySelector('.btn-primary');
			if (btn) btn.textContent = 'Request Sent';
			setTimeout(() => { if (btn) btn.textContent = 'Request a Call'; }, 2500);
		});
	}
});
