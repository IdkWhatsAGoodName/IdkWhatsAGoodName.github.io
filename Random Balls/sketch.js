// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let GRAVITATIONAL_CONSTANT = 0.98;

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  window.setInterval(addBall,500);
}

function draw() {
  background(220);
  // displayBall();
  moveBall();
}

function displayBall(){
  for(let i = 0; i < ballArray.length; i++){
    fill(ballArray[i].color);
    circle(ballArray[i].x, ballArray[i].y, ballArray[i].radius);
  }
}

function addBall(){
  noStroke();
  let thisBall = {
    x: random(width),
    y: random(height),
    dx: 0,
    dy: 0,
    radius: random(25,50),
    color: color(random(255), random(255), random(255), random(255)),
  };
  ballArray.push(thisBall);
}

function moveBall() {
  
}
