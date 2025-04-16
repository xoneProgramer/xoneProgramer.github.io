// =======================
// Dynamic Text Animation
// =======================
const words = ["coding", "gaming", "automation", "scripting", "efficiency", "innovation"];
let index = 0;
const changingText = document.getElementById("changing-text");

function changeText() {
  changingText.style.opacity = '0';
  setTimeout(() => {
    changingText.textContent = words[index];
    changingText.style.opacity = '1';
    index = (index + 1) % words.length;
  }, 500);
}
changeText();
setInterval(changeText, 3000);

// =====================
// Download Button Effects
// =====================
const downloadButton = document.getElementById("download-button");

downloadButton.addEventListener("click", function(e) {
  // Create ripple click effect
  const rect = downloadButton.getBoundingClientRect();
  const circle = document.createElement("div");
  circle.classList.add("click-effect");
  circle.style.left = `${e.clientX - rect.left}px`;
  circle.style.top = `${e.clientY - rect.top}px`;
  downloadButton.appendChild(circle);
  setTimeout(() => {
    circle.remove();
  }, 600);

  // Trigger file download for XoneExecutor.exe
  const link = document.createElement('a');
  link.href = 'XoneExecutor.exe';
  link.download = 'XoneExecutor.exe';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

// =======================
// Canvas Particle Animation
// =======================
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');

let particlesArray = [];
const numberOfParticles = 100;
const maxVelocity = 0.5;

// Resize canvas to full screen
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Particle constructor
class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 1;
    this.speedX = (Math.random() - 0.5) * maxVelocity;
    this.speedY = (Math.random() - 0.5) * maxVelocity;
    this.opacity = Math.random() * 0.5 + 0.2;
  }
  
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    
    // Wrap particles off screen for continuous flow
    if(this.x < 0) this.x = canvas.width;
    if(this.x > canvas.width) this.x = 0;
    if(this.y < 0) this.y = canvas.height;
    if(this.y > canvas.height) this.y = 0;
  }
  
  draw() {
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Initialize particles
function initParticles() {
  particlesArray = [];
  for(let i = 0; i < numberOfParticles; i++){
    particlesArray.push(new Particle());
  }
}
initParticles();

// Animate particles
function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach(particle => {
    particle.update();
    particle.draw();
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();
