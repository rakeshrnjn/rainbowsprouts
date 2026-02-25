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
		apiKey: "__FIREBASE_API_KEY__",
		authDomain: "__FIREBASE_AUTH_DOMAIN__",
		projectId: "__FIREBASE_PROJECT_ID__",
		storageBucket: "__FIREBASE_STORAGE_BUCKET__",
		messagingSenderId: "__FIREBASE_MESSAGING_SENDER_ID__",
		appId: "__FIREBASE_APP_ID__",
		measurementId: "__FIREBASE_MEASUREMENT_ID__",
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
