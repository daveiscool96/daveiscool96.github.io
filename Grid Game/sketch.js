// Shell Smash
// David Hutcheson
// Extra for Experts:  

//structure
const ROWS = 40;
const COLS = 40;
let grid;
let cellWidth;
let cellHeight;

//environment
let wall;
let questionBlock;

// levels
let levels = [];
let step = 0;
let state = 0;
let ss; 
let es;

//player
let blueShell;
let shellX = 19;
let shellY = 10;

//player sprite
let spriteArray = [];


function preload() {
  wall = loadImage("blockO.png");
  questionBlock = loadImage("questionBlock.webp");
  spriteArray = [loadImage("tile000.png"), loadImage("tile001.png"), loadImage("tile002.png"), loadImage("tile003.png"), loadImage("tile004.png"), loadImage("tile005.png")];
  blueShell = loadImage("tile000.png");
  levels = [loadJSON("level1.json"), loadJSON("level2.json"), loadJSON("level3.json")];
  ss = loadImage("StartScreen.png");
  es = loadImage("endScreen.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/COLS;
  cellHeight = width/ROWS;
  grid = create2dArray(COLS, ROWS);
  //place player in grid
  grid[shellY][shellX] = 9; 
  //start level 1
  grid = levels[0];
  // next(COLS, ROWS);
}

function draw() {
  if (state === 0) {
    startScreen();
  }
  if (state === 1) {
    background("lightblue");
    displayGrid(grid);
  }
  if (state === 2) {
    grid = levels[1];
    shellX = 19;
    shellY = 10;
  }
  if (state === 3) {
    grid = levels[2];
    shellX = 19;
    shellY = 10;
  }
  if (state === 4) {
    endScreen();
  }
}

function startScreen() {
  image(ss, 0, 0, windowWidth, windowHeight);
}

function endScreen() {
  image(es, 0, 0, windowWidth, windowHeight);
}

//level creator
//will be replaced with level
function create2dArray(COLS, ROWS) {
  let questionBlockArray = [];
  for (let y=0; y<ROWS; y++) {
    questionBlockArray.push([]);
    for (let x=0; x<COLS; x++) {
      questionBlockArray[y].push(0);
    }
  }
  return questionBlockArray;
}

//next level
function next(COLS, ROWS) {
  // for (let y=0; y<ROWS; y++) {
  //   for (let x=0; x<COLS; x++) {
  //     if (grid[y][x] === 0) {
  //       state = step;
  //     }
  //     else {
  //       step++;
  //       state = step;
  //     }
  //   }
  // }
  
}

function keyPressed() {
  if (key === "1") {
    grid = levels[0];
  }
  if (key === "2") {
    grid = levels[1];
    shellX = 19;
    shellY = 10;
  }
  if (key === "3") {
    grid = levels[2];
    shellX = 19;
    shellY = 10;
  }
  
  if (state === 0 && key === " " || state === 4 && key === " " ) {
    state = 1;
  }
  if (key === " " ) {
    state = step++;
  }
  

  if (keyCode === RIGHT_ARROW) {
    for (let i = 0; i < 20; i++) {
      //if no brick move
      if (grid[shellY][shellX+1] !== 1) {
        //make old location blue
        grid[shellY][shellX] = 10;
        //move
        shellX++;
        //set new player location
        grid[shellY][shellX] = 9;
        
      }
    }
    animate();
  }

  if (keyCode === LEFT_ARROW) {
    for (let i = 0; i < 20; i++) {
      if (grid[shellY][shellX-1] !== 1) {
        //make old location blue
        grid[shellY][shellX] = 10;
        //move
        shellX--;
        //set new player location
        grid[shellY][shellX] = 9;
        
      }
    }
    animate();
  }

  if (keyCode === UP_ARROW) {
    for (let i = 0; i < 20; i++) {
      //if no brick move
      if (grid[shellY-1][shellX] !== 1) {
        //make old location blue
        grid[shellY][shellX] = 10;
        //move
        shellY--;
        //set new player location
        grid[shellY][shellX] = 9;
        
      }
    }
    animate();
  }

  if (keyCode === DOWN_ARROW) {
    for (let i = 0; i < 20; i++) {
      //if no brick move
      if (grid[shellY+1][shellX] !== 1) {
        //make old location blue
        grid[shellY][shellX] = 10;
        //move
        shellY++;
        //set new player location
        grid[shellY][shellX] = 9;
        
      }
    }
    animate();
  }
}  

function animate() {
if (t === 6) {
  t = 0;
}
blueShell = spriteArray[t];
t++
}

//only used for level creation
//should be commented out otherwise
function mousePressed() {
  let xPos = Math.floor(mouseX/cellWidth);
  let yPos = Math.floor(mouseY/cellHeight);

  if (grid[yPos][xPos] === 0) {
    grid[yPos][xPos] = 1;
  }
  else if (grid[yPos][xPos] === 1) {
    grid[yPos][xPos] = 0;
  }
}

//make so it stays blue when touched
//places things in grid
function displayGrid(grid) {
  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {
      if (grid[y][x] === 0) {
        //make question block
        image(questionBlock, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === 1) {
        //make a wall
        image(wall, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === 9) {
        //make player
        image(blueShell, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        
      }
      else if (grid[y][x] === 10) {
        //make blue
        fill("lightblue");
      }
    }
  }
}

//start screen
//when complete next level
//when complete last level
//end screen
//triggered by function that counts number of question blocks and returns 0
//space to play again