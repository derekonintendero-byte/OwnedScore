import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

document.getElementById("register-btn").addEventListener("click", async () => {
  const email = document.getElementById("register-email").value;
  const pass = document.getElementById("register-pass").value;

  try {
    await createUserWithEmailAndPassword(auth, email, pass);
    alert("Cuenta creada");
    window.location.href = "perfil.html";
  } catch (e) {
    alert("Error: " + e.message);
  }
});
