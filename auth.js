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

// Redirección a perfil
if (navProfile) navProfile.onclick = () => window.location.href = "perfil.html";
if (mobileProfile) mobileProfile.onclick = () => window.location.href = "perfil.html";

// Abrir login
if (navLogin) navLogin.onclick = () => loginModal.style.display = "flex";
if (mobileLogin) mobileLogin.onclick = () => loginModal.style.display = "flex";

// Cerrar login
if (closeLoginModal) closeLoginModal.onclick = () => loginModal.style.display = "none";

// Login
if (loginBtn) {
  loginBtn.onclick = async () => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value);
      loginModal.style.display = "none";
    } catch (err) {
      alert("Error al iniciar sesión: " + err.message);
    }
  };
}

// Logout
if (navLogout) navLogout.onclick = () => signOut(auth);
if (mobileLogout) mobileLogout.onclick = () => signOut(auth);

// Estado de sesión
onAuthStateChanged(auth, (user) => {
  if (user) {
    if (navLogin) navLogin.style.display = "none";
    if (navLogout) navLogout.style.display = "inline-block";
    if (navProfile) navProfile.style.display = "inline-block";

    if (mobileLogin) mobileLogin.style.display = "none";
    if (mobileLogout) mobileLogout.style.display = "block";
    if (mobileProfile) mobileProfile.style.display = "block";
  } else {
    if (navLogin) navLogin.style.display = "inline-block";
    if (navLogout) navLogout.style.display = "none";
    if (navProfile) navProfile.style.display = "none";

    if (mobileLogin) mobileLogin.style.display = "block";
    if (mobileLogout) mobileLogout.style.display = "none";
    if (mobileProfile) mobileProfile.style.display = "none";
  }
});
