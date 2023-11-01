class Bird {
  constructor() {
    this.position = {
      x: canvas.width / 2,
      y: 0,
    };
    this.velocity = {
      x: 0,
      y: 1,
    };
    this.size = {
      width: 50,
      height: 50,
    };
    this.isDead = false;
    this.acceleration = 0.1;

    this.img = new Image();
    this.img.src = "./bird.png";
  }

  draw() {
    c.beginPath();
    c.fillStyle = "red";
    c.drawImage(
      this.img,
      this.position.x - this.size.width / 2,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }

  borderCollision() {
    if (this.position.y + this.size.height >= canvas.height) {
      this.position.y = canvas.height - this.size.height;
      this.isDead = true;
    }
  }
  jump() {
    this.velocity.y = -2;
  }

  move() {
    this.velocity.y += this.acceleration;
    this.position.y += this.velocity.y;
  }

  update() {
    this.draw();
    if (!this.isDead) {
      this.move();
    }
    this.borderCollision();
  }
}
