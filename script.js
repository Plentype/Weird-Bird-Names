let options = {
	rootMargin: '0px',
	threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
	// Loop over the entries
	entries.forEach((entry) => {
		// If the element is visible
		if (entry.isIntersecting) {
			// Add the animation class
			entry.target.classList.add('scroll-animate');
		}
	});
}, options);

observer.observe(document.querySelector('.bird-article'));
