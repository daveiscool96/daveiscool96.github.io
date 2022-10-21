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
let wallStep = 0;
let lookingRight = true;
let lookingLeft = false;
let climbing = false;

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
let spiberR5;
let spiberR6;

//idol left
let spiberIdolL;

//left
let spiberL1;
let spiberL2;
let spiberL3;
let spiberL4;
let spiberL5;
let spiberL6;

//idol wall 
let spiberWallIdol;

// wall
let spiberWall1;
let spiberWall2;
let spiberWall3;
let spiberWall4;
let spiberWall5;




function preload() {
  spiberBG = loadImage("Buildings.png");

//idol right
spiberIdolR = loadImage("idolR.png");

//right
spiberR1 = loadImage("run1.png");
spiberR2 = loadImage("run2.png");
spiberR3 = loadImage("run3.png");
spiberR4 = loadImage("run4.png");
spiberR5 = loadImage("run5.png");
spiberR6 = loadImage("run6.png");

//idol wall 
spiberWallIdol = loadImage("new climb 3.png");

// wall
spiberWall1 = loadImage("new climb 1.png");
spiberWall2 = loadImage("new climb 2.png");
spiberWall3 = loadImage("new climb 3.png");
spiberWall4 = loadImage("new climb 4.png");
spiberWall5 = loadImage("new climb 5.png");

//idol left
spiberIdolL = loadImage("idolL.png");

//left
spiberL1 = loadImage("newrunL1.png");
spiberL2 = loadImage("newrunL2.png");
spiberL3 = loadImage("newrunL3.png");
spiberL4 = loadImage("newrunL4.png");
spiberL5 = loadImage("newrunL5.png");
spiberL6 = loadImage("newrunL6.png");

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
  //running right
  if(lookingRight == true && spiberY > 760) {
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
    }
    else if (step == 12) {
      image(spiberR5, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 13) {
      image(spiberR5, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 14) {
      image(spiberR5, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 15) {
      image(spiberR6, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 16) {
      image(spiberR6, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 17) {
      image(spiberR6, spiberX, spiberY, spiberWidth, spiberHeight);
      step = 0;
    }
  }
  //running left
  if(lookingLeft == true && spiberY > 760) {
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
    }
    else if (step == 12) {
      image(spiberL5, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 13) {
      image(spiberL5, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 14) {
      image(spiberL5, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 15) {
      image(spiberL6, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 16) {
      image(spiberL6, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 17) {
      image(spiberL6, spiberX, spiberY, spiberWidth, spiberHeight);
      step = 0;
    }

  }
  // climbing 
  if(spiberY < 760 && climb == true ||spiberY < 760 && lookingRight||spiberY < 760 && lookingLeft) {
    wallStep = wallStep+1;
    if (wallStep == 0) {
      image(spiberWall1, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (wallStep == 1) {
      image(spiberWall1, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (wallStep == 2) {
      image(spiberWall1, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (wallStep == 3) {
      image(spiberWall2, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (wallStep == 4) {
      image(spiberWall2, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (wallStep == 5) {
      image(spiberWall2, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (wallStep == 6) {
      image(spiberWall3, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (wallStep == 7) {
      image(spiberWall3, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (wallStep == 8) {
      image(spiberWall3, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (wallStep == 9) {
      image(spiberWall4, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (wallStep == 10) {
      image(spiberWall4, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (wallStep == 11) {
      image(spiberWall4, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (wallStep == 12) {
      image(spiberWall4, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (wallStep == 13) {
      image(spiberWall4, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (wallStep == 14) {
      image(spiberWall4, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (wallStep == 15) {
      image(spiberWall5, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (wallStep == 16) {
      image(spiberWall5, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (wallStep == 17) {
      image(spiberWall5, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (wallStep == 18) {
      image(spiberWall3, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (wallStep == 19) {
      image(spiberWall3, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (wallStep == 20) {
      image(spiberWall3, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (wallStep == 21) {
      image(spiberWall2, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (wallStep == 22) {
      image(spiberWall2, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (wallStep == 23) {
      image(spiberWall2, spiberX, spiberY, spiberWidth, spiberHeight);
      wallStep = 0;
    }
  }
  //idol
  if (lookingRight == false && lookingLeft == false && spiberY > 760) {
    image(spiberIdolR, spiberX, spiberY, spiberWidth, spiberHeight);
  }
  else if(lookingRight == false && lookingLeft == false && spiberY < 760 && climb == false) {
    image(spiberWallIdol, spiberX, spiberY, spiberWidth, spiberHeight);
  }



}


function handleKeys() {
  //stay off edge
  if (spiberX > bgX - bgX/48 - spiberWidth) {
    spiberX -= spiberSpeed;
  }
  else if (spiberX < 0) {
    spiberX += spiberSpeed;
  }
  else {
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
    if (lookingRight == true) {
      if (spiberX > 0 && spiberX < bgX/48*2 && spiberY < 760 ||spiberX > bgX/48*11 - spiberWidth && spiberX < bgX/48*14 && spiberY < 760 ||spiberX > bgX/48*21 - spiberWidth && spiberX < bgX/48*25 && spiberY < 760 || spiberX > bgX/48*33 - spiberWidth && spiberX < bgX/48*36 && spiberY < 760 ) {
        spiberX -= spiberSpeed;
      }
    }
    else if (lookingLeft == true) {
      if (spiberX > 0 && spiberX < bgX/48*2 && spiberY < 760 ||spiberX > bgX/48*11 - spiberWidth && spiberX < bgX/48*14 && spiberY < 760 ||spiberX > bgX/48*21 - spiberWidth && spiberX < bgX/48*25 && spiberY < 760 || spiberX > bgX/48*33 - spiberWidth && spiberX < bgX/48*36 && spiberY < 760 ) {
        spiberX += spiberSpeed;
      }
    }
  }
  
  


  //Y
  if (spiberY > 780) {
    spiberY -= spiberSpeed;
  }
  else if(spiberY > 780 && lookingRight || spiberY > 780 && lookingLeft) {
    spiberY += spiberSpeed * spiberSpeed;
  }
   
  else {

    if (spiberX > bgX/48*2 && spiberX < bgX/48*11 - spiberWidth && spiberY < 350 || spiberX > bgX/48*14 && spiberX < bgX/48*21 - spiberWidth && spiberY < 350 || spiberX > bgX/48*25 && spiberX < bgX/48*33 - spiberWidth && spiberY < 350 || spiberX > bgX/48*36 && spiberX < bgX/48*47 - spiberWidth && spiberY < 350) {
      spiberY += spiberSpeed
    }
    else if(spiberY < 350 && lookingRight || spiberY < 350 && lookingLeft) {
      spiberY -= spiberSpeed * spiberSpeed;
    }
    else{
      if (spiberX > bgX/48*2 && spiberX < bgX/48*11 - spiberWidth || spiberX > bgX/48*14 && spiberX < bgX/48*21 - spiberWidth || spiberX > bgX/48*25 && spiberX < bgX/48*33 - spiberWidth || spiberX > bgX/48*36 && spiberX < bgX/48*46 - spiberWidth) {
        if (keyIsDown(83)) {//s
          spiberY += spiberSpeed;
          climb = true;
        }
        else if (keyIsDown(87)) {//w
          spiberY -= spiberSpeed;
          climb = true;
         }
        else {
          climb = false;
         }
      }
      
    }
        
  }       
        
}
