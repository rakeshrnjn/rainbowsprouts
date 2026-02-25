/**
 * Firebase config and auth for Rainbow Sprouts.
 * Auth state persists in localStorage by default (handled by Firebase).
 */
(function () {
	if (typeof firebase === "undefined") {
		console.warn(
			"Firebase SDK not loaded. Add firebase-app-compat.js and firebase-auth-compat.js before this script.",
		);
		return;
	}

	let firebaseConfig = {
		apiKey: "AIzaSyBaPi-ZclXve_PEMP2pkGrxr_HA4vekvFA",
		authDomain: "rainbowsprouts-ecc15.firebaseapp.com",
		projectId: "rainbowsprouts-ecc15",
		storageBucket: "rainbowsprouts-ecc15.appspot.com",
		messagingSenderId: "614580322287",
		appId: "1:614580322287:web:45b266e740f1f9b836c01a",
		measurementId: "G-L6R154JL4V",
	};

	// Allow override from a separate config (e.g. firebase-config.local.js) so you don't commit keys
	if (window.RainbowSproutsFirebaseConfig) {
		firebaseConfig = window.RainbowSproutsFirebaseConfig;
	}

	try {
		var app = firebase.initializeApp(firebaseConfig);
		var auth = firebase.auth();
		var db =
			typeof firebase.firestore === "function"
				? firebase.firestore()
				: null;

		window.firebaseApp = app;
		window.firebaseAuth = auth;
		if (db) {
			window.firebaseDb = db;
		}
	} catch (e) {
		if (e.code === "app/duplicate-app") {
			window.firebaseAuth = firebase.auth();
			if (typeof firebase.firestore === "function") {
				window.firebaseDb = firebase.firestore();
			}
		} else {
			console.error("Firebase init error:", e);
		}
	}
})();
