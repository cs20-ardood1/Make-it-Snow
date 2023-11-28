let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;
let snowflakes = [];

function makeSnow(x, y, size, speed) {
  let snowflake = {
    x,
    y,
    size,
    speed,
  };
  return snowflake;
}
function drawSnowflake(flake) {
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
  ctx.fill();
}
function updateSnow(flake) {
  if (flake.y > cnv.height) {
    flake.y = Math.random() * cnv.height;
    flake.x = Math.random() * cnv.width;
  }
  flake.y += flake.speed;
}

function drawSnow() {
  ctx.clearRect(0, 0, cnv.width, cnv.height);
  for (let i = 0; i < snowflakes.length; i++) {
    updateSnow(snowflakes[i]);
    drawSnowflake(snowflakes[i]);
  }

  requestAnimationFrame(drawSnow);
}

function addSnow() {
  let newSnowflake = makeSnow(
    Math.random() * cnv.width,
    Math.random() * cnv.height,
    Math.random() * 7,
    Math.random() * 1
  );

  snowflakes.push(newSnowflake);
}

function removeSnow() {
  snowflakes.pop();
}

// Event listeners
window.addEventListener("keydown", keyEvents);
cnv.addEventListener("click", addSnow);
document.getElementById("btn").addEventListener("click", addSnow);

function keyEvents(event) {
  if (event.key === "Backspace") {
    removeSnow();
  }
}
drawSnow();
