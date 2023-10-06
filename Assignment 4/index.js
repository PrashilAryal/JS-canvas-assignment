const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

canvas.style.backgroundColor = "black";

let totalParticles = 50;

class Particle {
  constructor() {
    this.x = Math.random() * (800 - 0) + 0;
    this.y = Math.random() * (800 - 0) + 0;
    this.r = Math.random() * (20 - 5) + 5;
    this.r = Math.random() * (20 - 5) + 5;
    this.radiusChange = Math.random() * (0.5 - 0) + 0; // Random rate of radius change
  }

  draw() {
    c.beginPath();
    c.fillStyle = "white";
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    c.fill();
  }

  update() {
    this.r += this.radiusChange; // Adjust the radius based on the rate of change

    // Ensure the radius stays within a specific range (e.g., 5 to 20)
    if (this.r < 5) {
      this.radiusChange = Math.abs(this.radiusChange); // Reverse direction
    } else if (this.r > 20) {
      this.radiusChange = -Math.abs(this.radiusChange); // Reverse direction
    }
  }

  shake() {
    this.x += Math.random() * (1 - -1) + -1;
    this.y += Math.random() * (1 - -1) + -1;
  }
}

const particleArr = [];
for (let i = 0; i < totalParticles; i++) {
  const obj = new Particle();
  particleArr.push(obj);
}
console.log(particleArr);

// game loop
function animate() {
  c.clearRect(0, 0, 800, 800);

  for (let i = 0; i < totalParticles; i++) {
    particleArr[i].draw();
    particleArr[i].shake();
    particleArr[i].update();
  }
  window.requestAnimationFrame(animate);
}
animate();
