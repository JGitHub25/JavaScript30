let hourHand = document.querySelector(".hour-hand");
let minHand = document.querySelector(".min-hand");
let secondHand = document.querySelector(".second-hand");

function segundos() {
  let now = new Date();

  let secs = now.getSeconds();
  let degrees = (secs / 60) * 360 + 90;

  secondHand.style.transform = `rotate(${degrees}deg)`;
}

function minutos() {
  let now = new Date();

  let mins = now.getMinutes();
  let degrees = (mins / 60) * 360 + 90;

  minHand.style.transform = `rotate(${degrees}deg)`;
}

function horas() {
  let now = new Date();

  let hours = now.getHours();
  let degrees = (hours / 12) * 360 + 90;

  hourHand.style.transform = `rotate(${degrees}deg)`;
}

segundos();
minutos();
horas();
setInterval(segundos, 1000);
setInterval(minutos, 60000);
setInterval(horas, 3600000);
