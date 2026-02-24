# Firebase Authentication Setup

Rainbow Sprouts uses **Firebase Authentication** for login and logout. Auth state is persisted in **localStorage** so users stay signed in across tabs and browser restarts.

## Why Firebase?

- **Free** and generous quota for small projects
- **Secure**: passwords and tokens handled by Google
- **No backend auth code**: login/logout run entirely in the browser
- **Persistence**: Firebase uses localStorage by default so users stay logged in
- **Easy to add**: Google Sign-In, password reset, email verification later if you want

## One-time setup

### 1. Create a Firebase project

1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Click **Add project** (or use an existing project).
3. Follow the steps (you can disable Analytics if you like).

### 2. Enable Email/Password sign-in

1. In the project, open **Build → Authentication**.
2. Click **Get started**.
3. Open the **Sign-in method** tab.
4. Click **Email/Password**, turn **Enable** on, then **Save**.

### 3. Get your config

1. Click the **gear** next to “Project Overview” → **Project settings**.
2. Under **Your apps**, click the **Web** icon (`</>`).
3. Register an app (e.g. “Rainbow Sprouts web”).
4. Copy the **firebaseConfig** object (apiKey, authDomain, projectId, etc.).

### 4. Add config to the site

**Option A – In the repo (simplest for local/dev)**  
Edit `js/firebase-config.js` and replace the placeholder values with your config:

```javascript
var firebaseConfig = {
  apiKey: "YOUR_ACTUAL_API_KEY",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

**Option B – Without committing keys**  
Create a file `js/firebase-config.local.js` (and add it to `.gitignore`). In it, set:

```javascript
window.RainbowSproutsFirebaseConfig = {
  apiKey: "YOUR_ACTUAL_API_KEY",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

Then in every HTML page that loads Firebase, include this **before** `firebase-config.js`:

```html
<script src="js/firebase-config.local.js"></script>
```

## How it works in the app

- **Login**: `login.html` uses Firebase `signInWithEmailAndPassword`. On success, the user is stored in `localStorage` and you’re redirected.
- **Logout**: The “Log out” link in the nav calls Firebase `signOut()` and clears `localStorage`.
- **Nav**: `common.js` uses Firebase `onAuthStateChanged` and, if Firebase isn’t ready, falls back to `localStorage` so the correct “Home” and “Log out” links show.

## Optional: Sign-up page

To let users create accounts, add a sign-up page that calls Firebase `createUserWithEmailAndPassword`. You can reuse the same Firebase project and config; just enable Email/Password as above.

## Security note

Firebase config (apiKey, projectId, etc.) is **safe to use in front-end code**. It identifies your project; access is controlled by Firebase Security Rules and Auth settings. Do not put secret keys (e.g. private API keys for other services) in this config.
