class Enemy {
  constructor() {
    this.position = {
      x: Math.random() * (canvas.width - 50 - 10) + 10,
      y: -50,
    };
    this.velocity = {
      x: 0,
      y: 1,
    };
    this.size = Math.random() * (40 - 30) + 30;
    this.image = new Image();
    this.image.src = "./images/enemy.png";
    this.damageImage = new Image();
    this.damageImage.src = "./images/damageEnemy.png";
  }
  draw() {
    c.beginPath();
    c.fillStyle = "red";
    c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  collisionWithBullet(bullets) {
    for (let i = 0; i < bullets.length; i++) {
      if (
        this.position.x + this.size >= bullets[i].position.x &&
        this.position.x <= bullets[i].position.x + bullets[i].size &&
        this.position.y + this.size >= bullets[i].position.y &&
        this.position.y <= bullets[i].position.y + bullets[i].size
      ) {
        console.log("Enemy died");
        this.velocity.y = 0;
        this.position.x = -100;
        this.position.y = -100;
        setTimeout(() => {
          c.drawImage(
            this.damageImage,
            this.position.x,
            this.position.y,
            this.size,
            this.size
          );
        }, 1000);
      }
    }
  }

  collision(player) {
    // check collision between enemy and player
    // console.log(player);
    if (
      this.position.x + this.size >= player.position.x &&
      this.position.x <= player.position.x + player.size &&
      this.position.y + this.size >= player.position.y &&
      this.position.y <= player.position.y + player.size
    ) {
      player.isAlive = false;
      // console.log("collide");
    }
  }
  move() {
    this.position.y += this.velocity.y;
  }
  update() {
    this.draw();
    if (player.isAlive) {
      this.move();
    }
  }
}
