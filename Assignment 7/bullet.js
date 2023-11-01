class Bullet {
  constructor(x = 0, y = 0) {
    this.position = {
      x: x,
      y: y,
    };
    this.velocity = {
      x: 1,
      y: -5,
    };
    this.size = 25;
    this.image = new Image();
    this.image.src = "./images/bullet.png";
  }

  draw() {
    c.beginPath();
    c.fillStyle = "white";
    // c.fillRect(this.position.x, this.position.y, this.size, this.size);
    c.drawImage(
      this.image,
      this.position.x + player.size / 5,
      this.position.y,
      this.size,
      this.size
    );
  }

  move() {
    this.position.y += this.velocity.y;
  }

  update() {
    this.draw();
    this.move();
  }
}

const bulletSound = new Audio();

function playFire() {
  bulletSound.src = "./sounds/enemyShoot.wav";
  bulletSound.play();
  bulletSound.volume = 0.2;
  bulletSound.loop = false;
}
