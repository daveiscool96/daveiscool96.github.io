// Interactive-Scene
// Dave H.
// 9/22/2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//scalar
let xcale = 1.4;

//interactive background
let spiberBG;

//background size
let bgX = 612*xcale
let bgY = 681*xcale

//size
let spiberWidth = 52;
let spiberHeight = 90;

//position
let spiberX = bgX/2;
let spiberY = 780;

//speed
let spiberSpeed = 3;

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
  image(spiberBG, bgX, bgY);
  createCanvas(bgX, bgY);

}

function draw() {
  background(spiberBG);
  image(spiberIdolR, spiberX, spiberY, spiberWidth, spiberHeight);
  handleKeys();
}

function handleKeys() {
  //stay off edge
  if (spiberX > bgX - spiberWidth) {
    spiberX -= 1;
  }
  else if (spiberX < 0) {
    spiberX += 1;
  }
  else {
    //on ground?
    //if (spiberY === 780) {
      //start to run
      if (keyIsDown(68)) { //d
        spiberX += spiberSpeed;
      }
      if (keyIsDown(65)) { //a
        spiberX -= spiberSpeed;
      }
    //}
  }
  //where can climb?
  if (spiberX > bgX/48*2 && spiberX < bgX/48*11 - spiberWidth || spiberX > bgX/48*14 && spiberX < bgX/48*21 - spiberWidth || spiberX > bgX/48*25 && spiberX < bgX/48*33 - spiberWidth || spiberX > bgX/48*36 && spiberX < bgX/48*47 - spiberWidth ) {
    //temporary height range
    if (spiberY > 780) {
      spiberY -= 1;
    }
    else if (spiberY < 300) {
      spiberY += 1;
    }
     else {
    //start to climb
       if (keyIsDown(83)) {//s
        spiberY += spiberSpeed;
       }
       if (keyIsDown(87)) {//w
         spiberY -= spiberSpeed;
      } 
     }
    }
}
