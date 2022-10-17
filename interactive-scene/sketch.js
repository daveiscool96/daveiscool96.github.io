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
let bgX = 612*xcale;
let bgY = 681*xcale;

//sprite changer
let step = 0;
let lookingRight = true;
let lookingLeft = false;

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
let spiberR4;

//idol left
let spiberIdolL;

//left
let spiberL1;
let spiberL2;
let spiberL3;
let spiberL4;

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
  spiberSprites();
  handleKeys();
}

function spiberSprites() {
  //image(spiberIdolR, spiberX, spiberY, spiberWidth, spiberHeight);
  if(lookingRight == true && spiberY == 780) {
    lookingLeft = false;
    step = step+1;
    if (step == 0) {
      image(spiberR1, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 1) {
      image(spiberR1, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 2) {
      image(spiberR1, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 3) {
      image(spiberR2, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 4) {
      image(spiberR2, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 5) {
      image(spiberR2, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 6) {
      image(spiberR3, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 7) {
      image(spiberR3, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 8) {
      image(spiberR3, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 9) {
      image(spiberR4, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 10) {
      image(spiberR4, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 11) {
      image(spiberR4, spiberX, spiberY, spiberWidth, spiberHeight);
      step = 0;
    }
  }

  if(lookingLeft == true && spiberY == 780) {
    lookingRight = false;
    step = step+1;
    if (step == 0) {
      image(spiberL1, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 1) {
      image(spiberL1, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 2) {
      image(spiberL1, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 3) {
      image(spiberL2, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 4) {
      image(spiberL2, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 5) {
      image(spiberL2, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 6) {
      image(spiberL3, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 7) {
      image(spiberL3, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 8) {
      image(spiberL3, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 9) {
      image(spiberL4, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 10) {
      image(spiberL4, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 11) {
      image(spiberL4, spiberX, spiberY, spiberWidth, spiberHeight);
      step = 0;
    }
  }

  if (lookingRight == false && lookingLeft == false && spiberY == 780) {
    image(spiberIdolR, spiberX, spiberY, spiberWidth, spiberHeight);
  }
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
        lookingRight = true;
      }
      else {
        lookingRight = false;
      }
      if (keyIsDown(65)) { //a
        spiberX -= spiberSpeed;
        lookingLeft = true;
      }
      else {
        lookingLeft = false;
      }
    //}
  }
  //where can climb?
  if (spiberX > bgX/48*2 && spiberX < bgX/48*11 - spiberWidth || spiberX > bgX/48*14 && spiberX < bgX/48*21 - spiberWidth || spiberX > bgX/48*25 && spiberX < bgX/48*33 - spiberWidth || spiberX > bgX/48*36 && spiberX < bgX/48*47 - spiberWidth ) {
    //temporary height range
    if (spiberY > 780) {
      spiberY -= 1;
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
// else if (spiberY < 300) {
//   spiberY += 1;
// }