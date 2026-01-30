import {
	buildArchive,
} from "archive";
import {
	initialise as initialisePlayer,
} from "player";
import {
	initialise as initialiseNav,
} from "navigation";

// on pageload, execute various tasks
// sync tasks
document.addEventListener(`DOMContentLoaded`, () => {
	// build various page sections
	buildArchive();

	// initialise app
	initialisePlayer();

	// initialise navigation
	initialiseNav();
});
