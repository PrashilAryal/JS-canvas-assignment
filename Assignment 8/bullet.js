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
    this.size = 20;
    this.image = new Image();
    this.image.src = "./images/bullet.png";
  }

  draw() {
    c.beginPath();
    c.fillStyle = "white";
    c.drawImage(
      this.image,
      this.position.x + player.size / 3.5,
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
