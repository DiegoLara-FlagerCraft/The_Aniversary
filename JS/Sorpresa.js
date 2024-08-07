const canvas = document.getElementById('confettiCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

let confetti = [];
const initialConfettiCount = 500; // Aumentamos la cantidad inicial de confeti
const continuousConfettiCount = 200; // Cantidad continua de confeti
const gravity = 0.5;
const terminalVelocity = 5;
const drag = 0.075;
const colors = [
  { front: 'red', back: 'darkred' },
  { front: 'green', back: 'darkgreen' },
  { front: 'blue', back: 'darkblue' },
  { front: 'yellow', back: 'darkyellow' },
  { front: 'orange', back: 'darkorange' },
  { front: 'pink', back: 'darkpink' },
  { front: 'purple', back: 'darkpurple' },
  { front: 'turquoise', back: 'darkturquoise' },
];

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

function initConfetti(count) {
  for (let i = 0; i < count; i++) {
    confetti.push({
      color: colors[Math.floor(randomRange(0, colors.length))],
      dimensions: {
        x: randomRange(10, 20),
        y: randomRange(10, 30),
      },
      position: {
        x: randomRange(0, canvas.width),
        y: canvas.height - 1,
      },
      rotation: randomRange(0, 2 * Math.PI),
      scale: {
        x: 1,
        y: 1,
      },
      velocity: {
        x: randomRange(-25, 25),
        y: randomRange(0, -50),
      },
    });
  }
}

function renderConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confetti.forEach((confetto, index) => {
    let width = confetto.dimensions.x * confetto.scale.x;
    let height = confetto.dimensions.y * confetto.scale.y;

    ctx.translate(confetto.position.x, confetto.position.y);
    ctx.rotate(confetto.rotation);

    confetto.velocity.x -= confetto.velocity.x * drag;
    confetto.velocity.y = Math.min(confetto.velocity.y + gravity, terminalVelocity);
    confetto.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();

    confetto.position.x += confetto.velocity.x;
    confetto.position.y += confetto.velocity.y;

    if (confetto.position.y >= canvas.height) confetti.splice(index, 1);

    if (confetto.scale.y > 0.2) confetto.scale.y -= 0.007;

    ctx.fillStyle = confetto.velocity.y < 0 ? confetto.color.back : confetto.color.front;
    ctx.fillRect(-width / 2, -height / 2, width, height);

    ctx.setTransform(1, 0, 0, 1, 0, 0);
  });

  if (confetti.length < continuousConfettiCount) {
    initConfetti(continuousConfettiCount - confetti.length); // Generar más confeti para mantener un flujo continuo
  }

  requestAnimationFrame(renderConfetti);
}

window.addEventListener('resize', resizeCanvas);
window.onload = () => {
  resizeCanvas(); // Ajusta el canvas al tamaño de la ventana
  initConfetti(initialConfettiCount); // Generar una cantidad inicial grande de confeti
  renderConfetti();
  setTimeout(() => {
    const messageElement = document.getElementById('message');
    messageElement.style.opacity = 1;
    messageElement.style.fontSize = '10vw'; // Tamaño de fuente más grande para dispositivos móviles
  }, 5000);
};
