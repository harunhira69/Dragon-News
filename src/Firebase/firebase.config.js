// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7B0pNXA_2sYNehyGKHFpdrWt5BMKkR58",
  authDomain: "dragon-news-breaking-854bd.firebaseapp.com",
  projectId: "dragon-news-breaking-854bd",
  storageBucket: "dragon-news-breaking-854bd.firebasestorage.app",
  messagingSenderId: "624060435659",
  appId: "1:624060435659:web:28b493dbda1c9531409f4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);