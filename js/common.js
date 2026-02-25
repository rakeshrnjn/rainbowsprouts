// js/common.js – Nav/footer; auth state from Firebase + localStorage fallback
document.addEventListener("DOMContentLoaded", function () {
	var mount = document.getElementById("nav-mount");
	if (!mount) {
		renderFooter();
		return;
	}

	function renderNav(isAuthenticated, user) {
		var homeLink = isAuthenticated ? '<a href="index.html">Home</a>' : "";
		var authLink = isAuthenticated
			? '<a href="#" id="logoutLink">Log out</a>'
			: '<a href="login.html">Login</a>';

		var navHTML =
			'<header class="top-nav">' +
			'<div class="logo"><a href="index.html"><img src="images/RainbowSproutsLogo.png" alt="Rainbow Sprouts Logo" /></a></div>' +
			"<nav>" +
			homeLink +
			'<a href="quiz.html">Career Path Finder</a>' +
			'<a href="mission.html">Our Mission</a>' +
			'<a href="who-we-are.html">Who we are</a>' +
			'<a href="sources.html">Research</a>' +
			'<a href="careers.html">Career</a>' +
			authLink +
			"</nav></header>";

		mount.innerHTML = navHTML;

		var logoutLink = document.getElementById("logoutLink");
		if (logoutLink) {
			logoutLink.addEventListener("click", function (e) {
				e.preventDefault();
				if (window.firebaseAuth) {
					window.firebaseAuth
						.signOut()
						.then(function () {
							localStorage.removeItem("user");
							window.location.href = "login.html";
						})
						.catch(function (err) {
							console.error("Logout error:", err);
							localStorage.removeItem("user");
							window.location.href = "login.html";
						});
				} else {
					localStorage.removeItem("user");
					window.location.href = "login.html";
				}
			});
		}
	}

	function getAuthStateFromLocalStorage() {
		try {
			var stored = localStorage.getItem("user");
			if (!stored) return { isAuthenticated: false, user: null };
			var user = JSON.parse(stored);
			if (user && (user.uid || user.email)) {
				return { isAuthenticated: true, user: user };
			}
		} catch (e) {}
		return { isAuthenticated: false, user: null };
	}

	var fallback = getAuthStateFromLocalStorage();
	renderNav(fallback.isAuthenticated, fallback.user);

	if (window.firebaseAuth) {
		window.firebaseAuth.onAuthStateChanged(function (user) {
			var isAuthenticated = !!user;
			var userData = null;
			if (user) {
				userData = {
					uid: user.uid,
					email: user.email || null,
					displayName: user.displayName || user.email || "User",
				};
				try {
					localStorage.setItem("user", JSON.stringify(userData));
				} catch (err) {}
			} else {
				localStorage.removeItem("user");
			}
			renderNav(isAuthenticated, userData);
		});
	}

	function renderFooter() {
		var footerMount = document.getElementById("footer-mount");
		if (!footerMount) return;
		var footerHTML =
			'<footer class="footer">' +
			'<div class="social-links">' +
			'<a href="https://www.instagram.com/p/DS8LZtJDIlN/" target="_blank" rel="noopener"><img src="icons/instagram.svg" alt="Instagram" /></a>' +
			'<a href="https://youtube.com/@rainbowsproutsofficial?si=FSM4mRhvCygzp18d" target="_blank" rel="noopener"><img src="icons/youtube.svg" alt="YouTube" /></a>' +
			"</div>" +
			"<p class='copyrights'>&copy; 2026 Rainbow Sprouts. All rights reserved.</p>" +
			"</footer>";
		footerMount.innerHTML = footerHTML;
	}

	renderFooter();
});
