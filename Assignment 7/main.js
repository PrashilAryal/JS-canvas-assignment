const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

var background = new Image();
const bgSound = new Audio();
const player = new Player();
let allBullets = [];

background.src = "./images/background.jpg";

background.onload = function () {
  c.drawImage(background, 0, 0);
};

function loop() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  player.update();

  for (let i = 0; i < allBullets.length; i++) {
    allBullets[i].update();
  }
  requestAnimationFrame(loop);
}
loop();

function bgMusic() {
  bgSound.src = "./sounds/bgmusic.wav";
  bgSound.play();
  bgSound.volume = 0.2;
  bgSound.loop = true;
}

// all listener in this code below
document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowUp") player.velocity.y = -5;
  if (event.code === "ArrowDown") player.velocity.y = 5;
  if (event.code === "ArrowLeft") player.velocity.x = -5;
  if (event.code === "ArrowRight") player.velocity.x = 5;
  if (event.code === "KeyM") bgMusic();
  if (event.code === "Space") {
    allBullets.push(new Bullet(player.position.x, player.position.y));
    playFire();
  }
});

document.addEventListener("keyup", (event) => {
  if (event.code === "ArrowUp") player.velocity.y = 0;
  if (event.code === "ArrowDown") player.velocity.y = 0;
  if (event.code === "ArrowLeft") player.velocity.x = 0;
  if (event.code === "ArrowRight") player.velocity.x = 0;
});
