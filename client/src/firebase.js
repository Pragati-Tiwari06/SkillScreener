// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // ✅ This is missing

// ✅ Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7XlyKw4tr-VNQCOl83tnpfNFlsKbTY_Q",
  authDomain: "skillscreener-778ad.firebaseapp.com",
  projectId: "skillscreener-778ad",
  storageBucket: "skillscreener-778ad.appspot.com",  // ✅ correct domain
  messagingSenderId: "32187713873",
  appId: "1:32187713873:web:673d1c886ec46bca54ab70",
  measurementId: "G-G3RQFE0SRN"
};

//  Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (optional)
const analytics = getAnalytics(app);

//  Initialize Auth
const auth = getAuth(app);

//  Export the auth object
export { auth };
