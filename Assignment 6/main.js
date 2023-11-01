const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

// load the music
// Audio()
const backgroundMusic = new Audio();
const shootSound = new Audio();
backgroundMusic.src = "./sounds/bgmusic.wav";
// play the music

//loading image
const spaceShip = new Image();
spaceShip.src = "./images/hero.png";

function play() {
  backgroundMusic.play();
  backgroundMusic.loop = true;
}
function playFire() {
  shootSound.src = "./sounds/shoot.mp3";
  shootSound.play();
  shootSound.volume = 0.2;
  shootSound.loop = false;
}

canvas.addEventListener("click", () => {
  playFire();
});

function borderCollision() {
  if (y >= canvas.height - 50) {
    y = canvas.height - 50;
  } else {
    y++;
  }
}

let x = 160;
let y = 0;

function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.drawImage(spaceShip, x, y, 50, 50);
  borderCollision();
  requestAnimationFrame(animate);
}

animate();
