// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let x = 0;
let y = 0;
let sped = 25;
let dx = sped;
let dy = 0;
let SquareSize = 75;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  fill("black")
  square(x, y, 75);
  x += dx;
  y += dy;
  //go down at right wall
  if (x >= width - SquareSize && y <= 0) {
    dx -= sped;
    dy += sped;
  }
  //go left ar bottom wall
  if (x >= width - SquareSize && y >= height - SquareSize) {
    dx -= sped;
    dy -= sped;
  }
  //go up at left wall
  if (x <= 0 && y >= height - SquareSize) {
    dx += sped;
    dy -= sped;
  }
  //go right at top wall
  if (x <= 0 && y <= 0) {
    dx += sped;
    dy += sped;
  }
}
