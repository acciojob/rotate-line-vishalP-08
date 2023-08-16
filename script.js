const line = document.getElementById('line');
let rotation = 0;

function rotateLine() {
  rotation -= 1; // Clockwise rotation
  line.style.transform = `rotate(${rotation}deg)`;
  requestAnimationFrame(rotateLine);
}

rotateLine();
