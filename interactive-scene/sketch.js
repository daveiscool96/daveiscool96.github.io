// Interactive-Scene
// Dave H.
// 9/22/2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//scalar
let xcale = 1.4;

//position
let spiberX = 612*xcale/2;
let spiberY = 900;

//interactive background
let spiberBG;

//below sprites for character state machine
let spiberMan;

//idol right
let spiberIdolR;

//right
let spiberR1;
let spiberR2;
let spiberR3;


//idol left
let spiberIdolL;

//left
let spiberL1;
let spiberL2;
let spiberL3;


//idol wall 
let spiberWallIdol;

// wall
let spiberWall1;
let spiberWall2;




function preload() {
  spiberBG = loadImage("");

//idol right
spiberIdolR = loadImage("");

//right
spiberR1 = loadImage("");
spiberR2 = loadImage("");
spiberR3 = loadImage("");


//idol wall 
spiberWallIdolR = loadImage("");

// wall
spiberWallR1 = loadImage("");
spiberWallR2 = loadImage("");

//idol left
spiberIdolL = loadImage("");

//left
spiberL1 = loadImage("");
spiberL2 = loadImage("");
spiberL3 = loadImage("");



}
function setup() {
  image(spiberBG, 612*xcale, 681*xcale);
  createCanvas(612*xcale, 681*xcale);

}

function draw() {
  background(spiberBG);
  image(spiberIdolR, spiberX, spiberY, 52, 90);
}

