// script.js
// Common admin page helper functions

// ✅ Logout function
async function logout() {
  try {
    // If Firebase Auth is available, sign out
    if (typeof firebase !== "undefined" && firebase.auth) {
      await firebase.auth().signOut();
    }
  } catch (error) {
    console.warn("Firebase logout error:", error);
  }

  // Remove local storage flag
  localStorage.removeItem("loggedIn");

  // Redirect to login page
  window.location.href = "login.html";
}

// Expose globally for inline onclick in HTML
window.logout = logout;

// ✅ Optional: Redirect to login if not logged in
if (!localStorage.getItem("loggedIn") && !window.location.href.includes("login.html")) {
  window.location.href = "login.html";
}

// ✅ Utility: Format Firestore Timestamp safely
window.formatTimestamp = function(timestamp) {
  if (!timestamp) return "N/A";
  try {
    // Works for Firestore Timestamp object
    if (timestamp.toDate) return timestamp.toDate().toLocaleString();

    // Works if timestamp is stored as {seconds, nanoseconds}
    if (timestamp.seconds) return new Date(timestamp.seconds * 1000).toLocaleString();

    return new Date(timestamp).toLocaleString();
  } catch (e) {
    console.warn("Error formatting timestamp:", e);
    return "N/A";
  }
};
