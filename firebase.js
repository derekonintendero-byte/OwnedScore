// firebase.js
import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyBS7zyyoSvQfllyQ8RAvdT3zU0GQGh5qUg",
  authDomain: "ownedscore.firebaseapp.com",
  projectId: "ownedscore",
  storageBucket: "ownedscore.firebasestorage.app",
  messagingSenderId: "987565706441",
  appId: "1:987565706441:web:988b9f831c19133a8c1118"
};

export const app = initializeApp(firebaseConfig);
