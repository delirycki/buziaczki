const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const licznikEl = document.getElementById("licznik");
const text = "Buziaczek :*";
let liczik = 1;
let idx = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText() {
  textEl.innerHTML = text.slice(0, idx);
  idx++;
  if (idx > text.length) {
    idx = 1;
    licznikEl.innerHTML = `Liczba danych buziaczków to ${liczik++}`;
  }
  setTimeout(writeText, speed);
}

speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));
