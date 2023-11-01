const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

class Box {
  constructor() {
    this.position = {
      x: 100,
      y: 0,
    };

    this.velocity = {
      x: 1,
      y: 1,
    };

    this.size = {
      width: 50,
      height: 50,
    };

    this.gravityValue = 9.8 / 60;
    this.bounceOff = -0.8;
  }

  draw() {
    c.beginPath();
    c.fillStyle = "red";
    c.rect(this.position.x, this.position.y, this.size.width, this.size.height);
    c.fill();
  }

  gravity() {
    this.velocity.y = this.velocity.y + this.gravityValue;
    this.position.y = this.position.y + this.velocity.y;
  }
  borderCollision() {
    if (this.position.y + this.size.height >= canvas.height) {
      this.position.y = canvas.height - this.size.height;
      this.velocity.y = this.velocity.y * this.bounceOff;
    }
  }
  update() {
    this.draw();
    this.gravity();
    this.borderCollision();
  }
}

const box = new Box();
function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  box.update();
  window.requestAnimationFrame(animate);
}

animate();
