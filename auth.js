import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

const loginBtn = document.getElementById("login-btn");
const loginEmail = document.getElementById("login-email");
const loginPass = document.getElementById("login-pass");

loginBtn.addEventListener("click", async () => {
  const email = loginEmail.value;
  const pass = loginPass.value;

  try {
    await signInWithEmailAndPassword(auth, email, pass);
    window.location.href = "perfil.html";
  } catch (err) {
    alert("Error al iniciar sesión");
  }
});

