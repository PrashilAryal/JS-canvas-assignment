const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
canvas.style.backgroundColor = "black";

let boxArray = [];

class Box {
  constructor() {
    this.position = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
    };
    this.size = {
      width: 10,
      height: 10,
    };
    this.velocity = {
      x: Math.random() * (1 - -1) + -1,
      y: 0,
    };
    this.color = "white";
  }

  draw() {
    c.beginPath();
    c.fillStyle = this.color;
    c.rect(this.position.x, this.position.y, this.size.width, this.size.height);
    c.fill();
  }

  move() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }

  update() {
    this.draw();
    this.move();
  }

  checkCollision(enemyBoxes, id) {
    enemyBoxes.forEach((enemy, index) => {
      if (id === index) {
        return;
      }

      if (
        this.position.x + this.size.width >= enemy.position.x &&
        this.position.y + this.size.height >= enemy.position.y &&
        this.position.x <= enemy.size.width + enemy.position.x &&
        this.position.y <= enemy.size.height + enemy.position.y
      ) {
        this.color = "red";
        enemy.color = "red";
      } else {
        this.color = "yellow";
      }
    });
  }
}

for (let i = 0; i < 100; i++) {
  boxArray.push(new Box());
}

function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);

  boxArray.forEach((item, index) => {
    item.update();
    item.checkCollision(boxArray, index);
  });

  requestAnimationFrame(animate);
}

animate();
