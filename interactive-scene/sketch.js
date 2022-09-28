// Interactive-Scene
// Dave H.
// 9/22/2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let monke;
let scalar = 2;

function preload(){
  monke = loadImage("monke.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  //background(220);
  image(monke, mouseX, mouseY, monke.width*scalar, monke.height*scalar);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    scalar = scalar * 1.5;
  } else if (keyCode === DOWN_ARROW) {
    scalar = scalar * 0.75;
  }
}