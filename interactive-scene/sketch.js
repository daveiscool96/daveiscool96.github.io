// Interactive-Scene
// Dave H.
// 9/22/2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let spiberBG;

function preload() {
  spiberBG = loadImage("best city background.png");
}
function setup() {
  image(spiberBG, 0, 0, width, height);
  createCanvas(width, height);
}

function draw() {
  background(spiberBG);
}

