// rawg.js
import { loadScore, saveScore } from "./score.js";

const RAWG_KEY = "3b728b12720b40cc8528d4052ba715d7";

const resultsContainer = document.getElementById("resultsContainer");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

async function searchGame(query) {
  resultsContainer.innerHTML = `<div class="no-result">Buscando...</div>`;

  try {
    const res = await fetch(
      `https://api.rawg.io/api/games?search=${encodeURIComponent(query)}&key=${RAWG_KEY}`
    );
    const data = await res.json();

    if (!data.results || data.results.length === 0) {
      resultsContainer.innerHTML = `<div class="no-result">No se encontró ningún juego.</div>`;
      return;
    }

    renderGame(data.results[0]);
  } catch (err) {
    resultsContainer.innerHTML = `<div class="no-result">Error al buscar el juego.</div>`;
  }
}

function renderGame(game) {
  const name = game.name;
  const img = game.background_image || "";
  const trailer = game.clip ? game.clip.clip : null;

  resultsContainer.innerHTML = `
    <div class="game-result">
      <div>
        <img src="${img}" class="game-img" />
        <h3>${name}</h3>
      </div>

      <div>
        ${
          trailer
            ? `<div class="video-wrapper"><iframe src="${trailer}" allowfullscreen></iframe></div>`
            : `<div class="no-result">Sin trailer</div>`
        }

        <div class="score-box-wrapper">
          <div class="score-box">
            <div class="score-title">OwnedScore</div>
            <div id="scoreNumber" class="score-number score-green">0</div>
            <div id="scoreVotes" class="score-votes">0 votos</div>

            <div class="score-your">Tu puntuación</div>
            <input id="scoreInput" type="number" min="0" max="100" class="score-input" />
            <button id="scoreBtn" class="score-btn">Enviar</button>
          </div>
        </div>
      </div>
    </div>
  `;

  loadScore(name);

  document.getElementById("scoreBtn").onclick = () => {
    const value = parseInt(document.getElementById("scoreInput").value);
    if (isNaN(value) || value < 0 || value > 100) {
      alert("Puntuación inválida");
      return;
    }
    saveScore(name, value);
  };
}

searchBtn.onclick = () => {
  const q = searchInput.value.trim();
  if (q) searchGame(q);
};

searchInput.onkeypress = (e) => {
  if (e.key === "Enter") {
    const q = searchInput.value.trim();
    if (q) searchGame(q);
  }
};
