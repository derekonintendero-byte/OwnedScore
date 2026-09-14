// score.js
import { app } from "./firebase.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

const db = getFirestore(app);

function updateColor(score) {
  const el = document.getElementById("scoreNumber");
  el.classList.remove("score-green", "score-yellow", "score-red");

  if (score >= 75) el.classList.add("score-green");
  else if (score >= 50) el.classList.add("score-yellow");
  else el.classList.add("score-red");
}

export async function loadScore(gameName) {
  const ref = doc(db, "scores", gameName);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    document.getElementById("scoreNumber").innerText = "0";
    document.getElementById("scoreVotes").innerText = "0 votos";
    updateColor(0);
    return;
  }

  const data = snap.data();
  const avg = Math.round(data.total / data.votes);

  document.getElementById("scoreNumber").innerText = avg;
  document.getElementById("scoreVotes").innerText = `${data.votes} votos`;
  updateColor(avg);
}

export async function saveScore(gameName, value) {
  const ref = doc(db, "scores", gameName);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    await setDoc(ref, { total: value, votes: 1 });
  } else {
    const data = snap.data();
    await setDoc(ref, { total: data.total + value, votes: data.votes + 1 });
  }

  loadScore(gameName);
}
