// firebase.js
// Import and initialize Firebase. Used by all pages.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBGW0FVMF2gjDChPcbMbfdkY3zp9LaiISE",
  authDomain: "my-civic-pro.firebaseapp.com",
  projectId: "my-civic-pro",
  storageBucket: "my-civic-pro.firebasestorage.app",
  messagingSenderId: "457064350295",
  appId: "1:457064350295:web:cfdbac285c7fe1e533d912"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
