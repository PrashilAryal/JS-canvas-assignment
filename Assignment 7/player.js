class Player {
  constructor() {
    this.position = {
      x: canvas.width / 2.5,
      y: canvas.height - 40,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.size = 40;
    this.image = new Image();
    this.image.src = "./images/hero.png";
  }

  draw() {
    c.beginPath();
    c.fillStyle = "red";
    // c.fillRect(this.position.x, this.position.y, this.size, this.size);
    c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  move() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }

  borderCollision() {
    if (this.position.y + this.size >= canvas.height) {
      this.position.y = canvas.height - this.size;
    }
    if (this.position.y <= 0) {
      this.position.y = 0;
    }
    if (this.position.x + this.size >= canvas.width) {
      this.position.x = canvas.width - this.size;
    }
    if (this.position.x <= 0) {
      this.position.x = 0;
    }
  }

  update() {
    this.draw();
    this.move();
    this.borderCollision();
  }
}
