// js/login.js – Firebase Auth (email/password) + localStorage
document.addEventListener("DOMContentLoaded", function () {
  var loginForm = document.getElementById("loginForm");
  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");
  var errorMessage = document.getElementById("errorMessage");

  if (!window.firebaseAuth) {
    showError("Auth not ready. Check Firebase config and script order.");
    return;
  }

  var auth = window.firebaseAuth;

  // If already signed in (e.g. from localStorage), fetch saved career and redirect
  auth.onAuthStateChanged(function (user) {
    if (user) {
      syncUserToLocalStorage(user);
      loadAndCacheUserCareer(user).finally(function () {
        var redirectTo =
          new URLSearchParams(window.location.search).get("redirect") ||
          "index.html";
        window.location.href = redirectTo;
      });
    }
  });

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var email = emailInput.value.trim();
    var password = passwordInput.value;

    errorMessage.classList.remove("show");
    errorMessage.textContent = "";

    if (!email || !password) {
      showError("Please fill in all fields");
      return;
    }

    auth
      .signInWithEmailAndPassword(email, password)
      .then(function (userCredential) {
        var user = userCredential.user;
        syncUserToLocalStorage(user);
        return loadAndCacheUserCareer(user).finally(function () {
          var redirectTo =
            new URLSearchParams(window.location.search).get("redirect") ||
            "index.html";
          window.location.href = redirectTo;
        });
      })
      .catch(function (error) {
        var msg = "Sign in failed. Try again.";
        if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password" || error.code === "auth/invalid-credential") {
          msg = "Invalid email or password.";
        } else if (error.code === "auth/invalid-email") {
          msg = "Please enter a valid email.";
        } else if (error.code === "auth/too-many-requests") {
          msg = "Too many attempts. Try again later.";
        } else if (error.message) {
          msg = error.message;
        }
        showError(msg);
      });
  });

  function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add("show");
  }

  function syncUserToLocalStorage(user) {
    try {
      var data = {
        uid: user.uid,
        email: user.email || null,
        displayName: user.displayName || user.email || "User"
      };
      localStorage.setItem("user", JSON.stringify(data));
    } catch (err) {
      console.warn("Could not sync user to localStorage", err);
    }
  }

  function loadAndCacheUserCareer(user) {
    if (!user || !window.firebaseDb) {
      return Promise.resolve();
    }
    try {
      var db = window.firebaseDb;
      return db
        .collection("userCareers")
        .doc(user.uid)
        .get()
        .then(function (doc) {
          if (!doc.exists) return;
          var data = doc.data() || {};
          var quizResult = {
            career: data.career || "",
            scores: data.scores || {},
            answers: data.answers || [],
          };
          if (quizResult.career) {
            localStorage.setItem("dreamCareer", quizResult.career);
          }
          try {
            localStorage.setItem("quizResult", JSON.stringify(quizResult));
          } catch (e) {
            console.warn("Could not cache quizResult in localStorage", e);
          }
        })
        .catch(function (err) {
          console.warn("Could not load career data from database", err);
        });
    } catch (e) {
      console.warn("Error accessing database for career data", e);
      return Promise.resolve();
    }
  }
});
