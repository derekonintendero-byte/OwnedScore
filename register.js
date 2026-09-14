// register.js
import { app } from "./firebase.js";
import {
  getAuth,
  createUserWithEmailAndPassword
} from "firebase/auth";

const auth = getAuth(app);

const registerModal = document.getElementById("registerModal");
const closeRegisterModal = document.getElementById("closeRegisterModal");

const registerBtn = document.getElementById("registerBtn");
const registerEmail = document.getElementById("registerEmail");
const registerPassword = document.getElementById("registerPassword");

const openRegisterFromLogin = document.getElementById("openRegisterFromLogin");
const openLoginFromRegister = document.getElementById("openLoginFromRegister");
const loginModal = document.getElementById("loginModal");

// Abrir registro
openRegisterFromLogin.onclick = () => {
  loginModal.style.display = "none";
  registerModal.style.display = "flex";
};

// Cerrar registro
closeRegisterModal.onclick = () => registerModal.style.display = "none";

// Volver a login
openLoginFromRegister.onclick = () => {
  registerModal.style.display = "none";
  loginModal.style.display = "flex";
};

// Registro
registerBtn.onclick = async () => {
  try {
    await createUserWithEmailAndPassword(auth, registerEmail.value, registerPassword.value);
    registerModal.style.display = "none";
  } catch (err) {
    alert("Error al registrarse");
  }
};
