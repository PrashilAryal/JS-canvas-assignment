const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

let gameScore = 0;
const intervalId = setInterval(() => {
  gameScore++;
}, 1000);

const bird = new Bird();
const bg = new Background(0, 0);
const bg2 = new Background(bg.size.width, 0);

let allBg = [];

// game loop
function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);

  // game logic
  bg.update(bg.isDead);
  bg2.update(bg.isDead);
  bird.update();

  c.beginPath();
  c.fillStyle = "white";
  c.font = "30px sans serif";
  c.fillText(gameScore, 10, 40);

  if (bird.isDead) {
    clearInterval(intervalId);
  }

  requestAnimationFrame(animate);
}

document.addEventListener("keydown", () => {
  //   console.log("jump");
  bird.jump();
});
animate();
