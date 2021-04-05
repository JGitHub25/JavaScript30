//No lo he terminado. Esta es mi versión. Está buena pero sigue siendo más play la de Wes.

let botones = document.querySelectorAll(".key");
let teclasValidas = [];

function quitarClase() {
  this.classList.remove("sound", "playing");
}

document.querySelectorAll("audio").forEach(function (tagAudio) {
  teclasValidas.push(tagAudio.dataset.key);
});

document.addEventListener("keydown", function (e) {
  let numeroTecla = e.key.toUpperCase().charCodeAt(0).toString();
  let boton = document.querySelector("div[data-key='" + numeroTecla + "']");

  if (teclasValidas.includes(numeroTecla)) {
    let sonido = document.querySelector(
      "audio[data-key='" + numeroTecla + "']"
    );

    sonido.currentTime = 0;
    sonido.play();
    boton.classList.add("sound", "playing");
  }
});

botones.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let sonido = document.querySelector(`audio[data-key="${btn.dataset.key}"]`);

    sonido.currentTime = 0;
    sonido.play();

    e.currentTarget.classList.add("sound", "playing");
  });
});
