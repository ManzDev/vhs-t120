import "./components/VHSCassetteLabel.js";
import "./components/VHSCassetteFilm.js";
import "./components/VHSCassette.js";
import "./components/VHSBox.js";
import "./components/KodakBox.js";

const MODELS = ["vhs", "kodak"];
let currentIndex = 0;

const container = document.querySelector(".container");

document.body.onclick = () => {
  currentIndex = (currentIndex + 1) % MODELS.length;
  const currentModel = MODELS[currentIndex];
  container.innerHTML = `
    <${currentModel}-box></${currentModel}-box>
    <vhs-cassette model="${currentModel}"></vhs-cassette>
  `;
};
