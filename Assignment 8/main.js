const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
const backgroundCanvas = document.getElementById("backgroundCanvas");
const bgC = backgroundCanvas.getContext("2d");

const background = new Image();

background.src = "./images/background.png";

background.onload = function () {
  bgC.drawImage(background, 0, 0, canvas.width, canvas.height);
  // c.fill();
  console.log(background);
  canvas.style.backgroundImage = src("./images/background.png");
};

const player = new Player();
// const enemy = new Enemy();
let allBullets = [];
let enemies = [];

setInterval(() => {
  const enemy = new Enemy();
  enemies.push(enemy);
}, 1000);

function loop() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].update();
    enemies[i].collision(player);
    enemies[i].collisionWithBullet(allBullets);
  }
  console.log("is Alive: ", player.isAlive);

  for (let i = 0; i < allBullets.length; i++) {
    allBullets[i].update();
  }
  // console.log();
  requestAnimationFrame(loop);
}

loop();

// all listener in this code below
document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowUp") player.velocity.y = -5;
  if (event.code === "ArrowDown") player.velocity.y = 5;
  if (event.code === "ArrowLeft") player.velocity.x = -5;
  if (event.code === "ArrowRight") player.velocity.x = 5;
  if (event.code === "Space")
    allBullets.push(new Bullet(player.position.x, player.position.y));
});

document.addEventListener("keyup", (event) => {
  if (event.code === "ArrowUp") player.velocity.y = 0;
  if (event.code === "ArrowDown") player.velocity.y = 0;
  if (event.code === "ArrowLeft") player.velocity.x = 0;
  if (event.code === "ArrowRight") player.velocity.x = 0;
  //   if (event.code === "Space") allBullets.pop(new Bullet());
});
