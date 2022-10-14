// Interactive-Scene
// Dave H.
// 9/22/2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//scalar
let xcale = 1.4
//interactive background
let spiberBG;

//below sprites for character state machine

//idol right
let spiberIdolR

//right
let spiberR1
let spiberR2
let spiberR3
let spiberR4
let spiberR5
let spiberR6

//idol wall right
let spiberWallIdolR

// wall right
let spiberWallR1
let spiberWallR2
let spiberWallR3
let spiberWallR4
let spiberWallR5
let spiberWallR6

//idol left
let spiberIdolL

//left
let spiberL1
let spiberL2
let spiberL3
let spiberL4
let spiberL5
let spiberL6

//idol wall left
let spiberWallIdolL

//wall left
let spiberWallL1
let spiberWallL2
let spiberWallL3
let spiberWallL4
let spiberWallL5
let spiberWallL6

function preload() {
  spiberBG = loadImage("buildingsBackground.png");

//idol right
spiberIdolR = loadImage("tile016.png");

//right
spiberR1 = loadImage("tile016.png");
spiberR2 = loadImage("tile017.png");
spiberR3 = loadImage("tile018.png");
spiberR4 = loadImage("tile019.png");
spiberR5 = loadImage("tile020.png");
spiberR6 = loadImage("tile021.png");

//idol wall right
spiberWallIdolR = loadImage("idolWallRight.png");

// wall right
spiberWallR1 = loadImage("0Right.png");
spiberWallR2 = loadImage("1Right.png");
spiberWallR3 = loadImage("2Right.png");
spiberWallR4 = loadImage("3Right.png");
spiberWallR5 = loadImage("4Right.png");
spiberWallR6 = loadImage("5Right.png");

//idol left
spiberIdolL = loadImage("tile023.png");

//left
spiberL1 = loadImage("tile023.png");
spiberL2 = loadImage("tile024.png");
spiberL3 = loadImage("tile025.png");
spiberL4 = loadImage("tile026.png");
spiberL5 = loadImage("tile027.png");
spiberL6 = loadImage("tile028.png");

//idol wall left
spiberWallIdolL = loadImage("idolWallLeft.png");

//wall left
spiberWallL1 = loadImage("0.png");
spiberWallL2 = loadImage("1.png");
spiberWallL3 = loadImage("2.png");
spiberWallL4 = loadImage("3.png");
spiberWallL5 = loadImage("4.png");
spiberWallL6 = loadImage("5.png");
}
function setup() {
  image(spiberBG, 612*xcale, 681*xcale);
  createCanvas(612*xcale, 681*xcale);
}

function draw() {
  background(spiberBG);
}

