import { auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

onAuthStateChanged(auth, user => {
  if (user) {
    console.log("Usuario activo:", user.email);
  } else {
    console.log("No hay usuario activo");
  }
});
