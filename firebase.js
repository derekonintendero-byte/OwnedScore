import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBS7yzvyoSQfLlyQ8RAvdT3zU8QGGh5qUg",
  authDomain: "ownedscore.firebaseapp.com",
  projectId: "ownedscore",
  storageBucket: "ownedscore.firebasestorage.app",
  messagingSenderId: "987656706441",
  appId: "1:987656706441:web:98b89f831c19133a8c1118"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

