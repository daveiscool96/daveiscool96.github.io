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
let spiberWallR2
let spiberWallR3
let spiberWallR4
let spiberWallR5
// wall right


//left

//idol left

//idol wall left

//wall left
function preload() {
  spiberBG = loadImage("buildingsBackground.png");
}
function setup() {
  image(spiberBG, 918, 1021.5);
  createCanvas(918, 1021.5);
}

function draw() {
  background(spiberBG);
}

