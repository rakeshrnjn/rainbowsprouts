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
		apiKey: "YOUR_FIREBASE_API_KEY",
		authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
		projectId: "YOUR_PROJECT_ID",
		storageBucket: "YOUR_PROJECT_ID.appspot.com",
		messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
		appId: "YOUR_APP_ID",
		measurementId: "YOUR_MEASUREMENT_ID",
	};

	// Prefer a local override so project-specific values stay out of git.
	if (window.RainbowSproutsFirebaseConfig) {
		firebaseConfig = window.RainbowSproutsFirebaseConfig;
	}

	if (
		!window.RainbowSproutsFirebaseConfig &&
		firebaseConfig.apiKey === "YOUR_FIREBASE_API_KEY"
	) {
		console.warn(
			"Firebase config missing. Create js/firebase-config.local.js from js/firebase-config.local.example.js.",
		);
		return;
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
