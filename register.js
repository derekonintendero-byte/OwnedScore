import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

const registerBtn = document.getElementById("register-btn");
const registerEmail = document.getElementById("register-email");
const registerPass = document.getElementById("register-pass");

registerBtn.addEventListener("click", async () => {
  const email = registerEmail.value;
  const pass = registerPass.value;

  try {
    await createUserWithEmailAndPassword(auth, email, pass);
    window.location.href = "perfil.html";
  } catch (err) {
    alert("Error al crear cuenta");
  }
});
