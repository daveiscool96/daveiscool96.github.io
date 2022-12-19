// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let triangleVertices = [
  {x : 500, y : 100},
  {x : 100, y : 600},
  {x : 900, y : 600}
];

let

let colors = [
  "blue", "red", "green", "white", "yellow", "purple", "brown", "orange", "black" 
];


function setup() {
  createCanvas(1000, 700);
}

function draw() {
  background(220);
  sierpinski(triangleVertices, 3);
}

function sierpinski(points, depth) {
  fill(colors[depth]);
  triangle(points[0].x, points[0].y,
           points[1].x, points[1].y,
           points[2].x, points[2].y);
  
  if (depth > 0) {
    sierpinski([points[0],
              getMidPoint(points[0], points[1]),
              getMidPoint(points[0], points[2])],
              depth - 1);
    sierpinski([points[1],
              getMidPoint(points[0], points[1]),
              getMidPoint(points[1], points[2])],
              depth - 1);
    sierpinski([points[2],
              getMidPoint(points[1], points[2]),
              getMidPoint(points[0], points[2])],
              depth - 1);
  }
}

function getMidPoint(point1, point2) {
  let xDiff = point1.x + point2.x;
  let yDiff = point1.y + point2.y;
  let theMidPoint = {x: xDiff/2, y: yDiff/2};
  return theMidPoint;
}
