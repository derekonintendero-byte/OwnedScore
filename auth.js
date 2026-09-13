import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

document.getElementById("login-btn").addEventListener("click", async () => {
  const email = document.getElementById("login-email").value;
  const pass = document.getElementById("login-pass").value;

  try {
    await signInWithEmailAndPassword(auth, email, pass);
    alert("Sesión iniciada");
    window.location.href = "perfil.html";
  } catch (e) {
    alert("Error: " + e.message);
  }
});
