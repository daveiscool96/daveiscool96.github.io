// Interactive-Scene
// Dave H.
// 9/22/2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//scalar
let xcale = 1.4;

//size
let spiberWidth = 52;
let spiberHeight = 90;

//position
let spiberX = 612*xcale/2;
let spiberY = 780;

//speed
let spiberSpeed = 5;

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
  spiberBG = loadImage("Buildings.png");

//idol right
spiberIdolR = loadImage("idolR.png");

//right
spiberR1 = loadImage("run1.png");
spiberR2 = loadImage("run2.png");
spiberR3 = loadImage("run3.png");
spiberR4 = loadImage("run4.png");


//idol wall 
spiberWallIdol = loadImage("new climb idol.png");

// wall
spiberWall1 = loadImage("new climb right.png");
spiberWall2 = loadImage("new climb left.png");

//idol left
spiberIdolL = loadImage("idolL.png");

//left
spiberL1 = loadImage("run1L.png");
spiberL2 = loadImage("run2L.png");
spiberL3 = loadImage("run3L.png");
spiberL4 = loadImage("run4L.png");


}
function setup() {
  image(spiberBG, 612*xcale, 681*xcale);
  createCanvas(612*xcale, 681*xcale);

}

function draw() {
  background(spiberBG);
  image(spiberIdolR, spiberX, spiberY, spiberWidth, spiberHeight);
  handleKeys();
}

function handleKeys() {
  //stay off edge
  if (spiberX > 612*xcale - spiberWidth) {
    spiberX -= 1;
  }
  else if (spiberX < 0) {
    spiberX += 1;
  }
  else {
//on ground?
    if (spiberY === 780) {
      //start to run
      if (keyIsDown(68)) { //d
        spiberX += spiberSpeed;
      }
      if (keyIsDown(65)) { //a
        spiberX -= spiberSpeed;
      }
    }
  }
    
  
  //ready to climb?
  // if (spiberX === 1 && spiberX === 2 || spiberX === 4 && spiberX === 5 || spiberX === 6 && spiberX === 7 || spiberX === 8 && spiberX === 9) {
  //   //start to climb
  //   if (keyIsDown(83)) { //s
  //     spiberY += spiberSpeed;
  //   }
  //   if (keyIsDown(87)) { //w
  //      spiberY -= spiberSpeed;
  //   }
  // }
 
  
}
