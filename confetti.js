const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiPieces = [];
for (let i = 0; i < 150; i++) {
  confettiPieces.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 2,
    d: Math.random() * 100,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confettiPieces.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, false);
    ctx.fillStyle = p.color;
    ctx.fill();
  });
  updateConfetti();
}

function updateConfetti() {
  confettiPieces.forEach(p => {
    p.y += Math.cos(p.d) + 1 + p.r / 2;
    if (p.y > canvas.height) {
      p.y = -10;
      p.x = Math.random() * canvas.width;
    }
  });
}

setInterval(drawConfetti, 20);
