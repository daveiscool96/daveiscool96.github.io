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
      step = 0;
    }
  }
  //running left
  else if(lookingLeft == true && spiberY > 760) {
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
  // climbing 
  else if(spiberY < 780 && climb == true ||spiberY < 790 && lookingRight || spiberY < 770 && lookingLeft) {
    step = step+1;
    if (step == 0) {
      image(spiberWall1, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 1) {
      image(spiberWall1, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 2) {
      image(spiberWall1, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 3) {
      image(spiberWall2, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 4) {
      image(spiberWall2, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 5) {
      image(spiberWall2, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 6) {
      image(spiberWall3, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 7) {
      image(spiberWall3, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 8) {
      image(spiberWall3, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 9) {
      image(spiberWall4, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 10) {
      image(spiberWall4, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 11) {
      image(spiberWall4, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 12) {
      image(spiberWall4, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 13) {
      image(spiberWall4, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 14) {
      image(spiberWall4, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 15) {
      image(spiberWall5, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 16) {
      image(spiberWall5, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 17) {
      image(spiberWall5, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 18) {
      image(spiberWall3, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 19) {
      image(spiberWall3, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 20) {
      image(spiberWall3, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 21) {
      image(spiberWall2, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 22) {
      image(spiberWall2, spiberX, spiberY, spiberWidth, spiberHeight);
    }
    else if (step == 23) {
      image(spiberWall2, spiberX, spiberY, spiberWidth, spiberHeight);
      step = 0;
    }
  }
  //idol
  if (lookingRight == false && lookingLeft == false && climb == false && spiberY > 760) {
    image(spiberIdolR, spiberX, spiberY, spiberWidth, spiberHeight);
    
  }
  else if(lookingRight == false && lookingLeft == false && spiberY < 775 && climb == false) {
    image(spiberWallIdol, spiberX, spiberY, spiberWidth, spiberHeight);
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

//  vertical range
if (spiberY > 780) {
  spiberY -= 1;
}
else if(spiberY > 780 && lookingRight || spiberY > 780 && lookingLeft) {
  spiberY -= spiberSpeed * spiberSpeed;
}

else {
  if (spiberX > bgX/48*2 && spiberX < bgX/48*11 - spiberWidth || spiberX > bgX/48*14 && spiberX < bgX/48*21 - spiberWidth || spiberX > bgX/48*25 && spiberX < bgX/48*33 - spiberWidth || spiberX > bgX/48*36 && spiberX < bgX/48*47 - spiberWidth) {
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
    
    // //horizontal range
    // if (spiberX < bgX/48*2 && spiberY < 760 || spiberX < bgX/48*14 && spiberY < 760 || spiberX < bgX/48*25 && spiberY < 760 || spiberX < bgX/48*36 && spiberY < 760 ) {
    //   spiberX += 1;
    // }
    // else if (spiberX > bgX/48*47 - spiberWidth && spiberY < 760 || spiberX > bgX/48*33 - spiberWidth && spiberY < 760 ||  spiberX > bgX/48*21 - spiberWidth && spiberY < 760 || spiberX > bgX/48*11 - spiberWidth && spiberY < 760 ) {
    //   spiberX -= 1;
    // }
    
      
      //  }
        // // else if () {
          // // if() {
  
          // // }
          // // if() {
  
          // // }
          // // if() {
  
          // // }
          // // if() {
  
          // // }
        // // }
        // // else {
      // //  start to climb
        
       
      // //  }
    
  
}

