const balloonCanvas = document.getElementById("balloons");
const bctx = balloonCanvas.getContext("2d");
balloonCanvas.width = window.innerWidth;
balloonCanvas.height = window.innerHeight;

const balloons = [];
for (let i = 0; i < 20; i++) {
  balloons.push({
    x: Math.random() * balloonCanvas.width,
    y: balloonCanvas.height + Math.random() * 200,
    r: 30,
    color: `hsl(${Math.random() * 360}, 100%, 60%)`,
    speed: Math.random() * 2 + 1
  });
}

function drawBalloons() {
  bctx.clearRect(0, 0, balloonCanvas.width, balloonCanvas.height);
  balloons.forEach(b => {
    bctx.beginPath();
    bctx.arc(b.x, b.y, b.r, 0, Math.PI * 2, false);
    bctx.fillStyle = b.color;
    bctx.fill();
    b.y -= b.speed;
    if (b.y < -50) {
      b.y = balloonCanvas.height + 50;
      b.x = Math.random() * balloonCanvas.width;
    }
  });
}

setInterval(drawBalloons, 30);
