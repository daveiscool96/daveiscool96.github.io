// Interactive-Scene
// Dave H.
// 9/22/2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//interactive background
let spiberBG;

//below sprites for character state machine

//idol right
let spiberIdolRight

//right
let spiberR1
let spiberR2
let spiberR3
let spiberR4
let spiberR5
let spiberR6

//idol wall right
let spiberWallR1

// wall right


//left

//idol left

//idol wall left

//wall left
function preload() {
  spiberBG = loadImage("buildingsBackground.png");
}
function setup() {
  image(spiberBG, 0, 0, width, height);
  createCanvas(width, height);
}

function draw() {
  background(spiberBG);
}

