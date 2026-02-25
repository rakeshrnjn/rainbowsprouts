// js/signup.js – Firebase email/password sign-up
document.addEventListener("DOMContentLoaded", function () {
  if (!window.firebaseAuth) {
    console.warn("Firebase auth not ready on signup page.");
    return;
  }

  var auth = window.firebaseAuth;
  var form = document.getElementById("signupForm");
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");
  var confirmPasswordInput = document.getElementById("confirmPassword");
  var errorMessage = document.getElementById("errorMessage");

  // If already signed in, redirect away from signup
  auth.onAuthStateChanged(function (user) {
    if (user) {
      var redirectTo =
        new URLSearchParams(window.location.search).get("redirect") ||
        "index.html";
      window.location.href = redirectTo;
    }
  });

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    clearError();

    var name = (nameInput.value || "").trim();
    var email = (emailInput.value || "").trim();
    var password = passwordInput.value;
    var confirmPassword = confirmPasswordInput.value;

    if (!name || !email || !password || !confirmPassword) {
      return showError("Please fill in all fields.");
    }

    if (password !== confirmPassword) {
      return showError("Passwords do not match.");
    }

    // Basic password guidance (Firebase will still enforce its own rules)
    if (password.length < 6) {
      return showError("Password should be at least 6 characters.");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(function (userCredential) {
        var user = userCredential.user;

        // Set display name (optional)
        return user
          .updateProfile({ displayName: name })
          .catch(function () {
            // Ignore if profile update fails
          })
          .then(function () {
            // Sync to localStorage like login
            try {
              var data = {
                uid: user.uid,
                email: user.email || null,
                displayName: name || user.email || "User",
              };
              localStorage.setItem("user", JSON.stringify(data));
            } catch (err) {
              console.warn("Could not store user in localStorage", err);
            }

            var redirectTo =
              new URLSearchParams(window.location.search).get("redirect") ||
              "index.html";
            window.location.href = redirectTo;
          });
      })
      .catch(function (error) {
        var code = error.code || "";
        var msg = "Sign up failed. Please try again.";

        if (code === "auth/email-already-in-use") {
          msg = "That email is already in use. Try logging in instead.";
        } else if (code === "auth/invalid-email") {
          msg = "Please enter a valid email address.";
        } else if (code === "auth/weak-password") {
          msg = "Password is too weak. Try a longer password.";
        } else if (error.message) {
          msg = error.message;
        }

        showError(msg);
      });
  });

  function showError(message) {
    if (!errorMessage) return;
    errorMessage.textContent = message;
    errorMessage.classList.add("show");
  }

  function clearError() {
    if (!errorMessage) return;
    errorMessage.textContent = "";
    errorMessage.classList.remove("show");
  }
});

