const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createStars(count) {
  stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.5 + 0.2,
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  for (const star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

function updateStars() {
  for (const star of stars) {
    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  }
}

function animate() {
  drawStars();
  updateStars();
  requestAnimationFrame(animate);
}

// Initialize animation
resizeCanvas();
createStars(150);
animate();

window.addEventListener('resize', () => {
  resizeCanvas();
  createStars(150);
});
