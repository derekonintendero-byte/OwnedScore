// auth.js
import { app } from "./firebase.js";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

const auth = getAuth(app);

// DOM
const navLogin = document.getElementById("navLogin");
const navLogout = document.getElementById("navLogout");
const navProfile = document.getElementById("navProfile");

const mobileLogin = document.getElementById("mobileLogin");
const mobileLogout = document.getElementById("mobileLogout");
const mobileProfile = document.getElementById("mobileProfile");

const loginModal = document.getElementById("loginModal");
const closeLoginModal = document.getElementById("closeLoginModal");

const loginBtn = document.getElementById("loginBtn");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");

// Abrir login
navLogin.onclick = () => loginModal.style.display = "flex";
mobileLogin.onclick = () => loginModal.style.display = "flex";

// Cerrar login
closeLoginModal.onclick = () => loginModal.style.display = "none";

// Login
loginBtn.onclick = async () => {
  try {
    await signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value);
    loginModal.style.display = "none";
  } catch (err) {
    alert("Error al iniciar sesión");
  }
};

// Logout
navLogout.onclick = () => signOut(auth);
mobileLogout.onclick = () => signOut(auth);

// Estado de sesión
onAuthStateChanged(auth, (user) => {
  if (user) {
    navLogin.style.display = "none";
    navLogout.style.display = "inline-block";
    navProfile.style.display = "inline-block";

    mobileLogin.style.display = "none";
    mobileLogout.style.display = "block";
    mobileProfile.style.display = "block";
  } else {
    navLogin.style.display = "inline-block";
    navLogout.style.display = "none";
    navProfile.style.display = "none";

    mobileLogin.style.display = "block";
    mobileLogout.style.display = "none";
    mobileProfile.style.display = "none";
  }
});
