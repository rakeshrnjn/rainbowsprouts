(function () {
	/**
	 * This script handles the authentication flow.
	 * - If a user is not logged in, it redirects them to the login page from any protected page.
	 * - If a user is logged in and they land on the login page, it redirects them to the main index page.
	 *
	 * This script should be included in all HTML pages that are part of this flow (e.g., index.html, login.html, dashboard.html).
	 */
	function setupAuthFlow() {
		firebase.auth().onAuthStateChanged(function (user) {
			// The root of the site now serves login.html, so "/" is the login page.
			const onLoginPage =
				window.location.pathname.endsWith("/login.html") ||
				window.location.pathname === "/";
			// Assume signup page is also public and should not be guarded.
			const onSignupPage =
				window.location.pathname.endsWith("/signup.html");

			if (user) {
				// User is signed in.
				// If they are on the login or signup page, redirect to the main app page.
				if (onLoginPage || onSignupPage) {
					window.location.replace("/index.html");
				}
			} else {
				// No user is signed in.
				// If this is not a public page, redirect to login.
				if (!onLoginPage && !onSignupPage) {
					window.location.replace("/login.html");
				}
			}
		});
	}

	// Wait for firebase to be initialized before setting up the auth flow.
	if (window.firebaseAuth) {
		setupAuthFlow();
	} else {
		document.addEventListener("firebase-ready", setupAuthFlow);
	}
})();
