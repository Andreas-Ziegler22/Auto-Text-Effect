const textEl = document.getElementById("text");
const speedEL = document.getElementById("speed");
const text = "Programming is more exciting than  playing Playstation 5 😜";

let idx = 1;
let speed = 300 / speedEL.value;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 1;
  }
  setTimeout(writeText, speed);
}
