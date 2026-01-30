/*
	navigation module:
		* modifies nav links according to site navigation
*/

// update currently-marked nav-link depending on URL fragment/:target
function navigateToSection() {
	document.querySelector(`[aria-current="page"]`)?.removeAttribute(`aria-current`);
	const section = document.querySelector(location.hash.length > 0 ? location.hash : null)?.closest(`main > *`);

	// if targeted section exists, mark its nav-link as the current one
	if (section) {
		const navLink = document.querySelector(`nav a[href="#${section.id}"]`);
		if (navLink) navLink.setAttribute(`aria-current`, `page`);
	}
}

// initialise navigation
function initialise() {
	if (location.hash) navigateToSection();
}

// navigation events
window.addEventListener(`hashchange`, navigateToSection);

export {
	initialise,
};
