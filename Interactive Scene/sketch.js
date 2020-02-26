// Interactive Scene - Definitely Thermodynamic Bouncy Ball
// Ray Dai
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let bouncy;
let gravity = 0.98;

let xCord = 0;
let yCord = 0;
// velocity is split into horizontal and vertical vectors
let xVelocity = 0;
let yVelocity = 0;

let leftBorder;
let rightBorder;
let topBorder;
let bottomBorder;

function preload(){
  // load the ball sprite
  bouncy = loadImage("assets/bouncy_ball.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // define the borders of the ball's movement
  leftBorder = 0;
  rightBorder = windowWidth - bouncy.width;
  topBorder = 0;
  bottomBorder = windowHeight - bouncy.height;
  
  // place the ball at the center
  xCord = windowWidth/2 - leftBorder;
  yCord = windowHeight/2 - bouncy.height/2;
}

// move ball
function draw() {
  background(220);
  moveBall();
  image(bouncy, xCord, yCord);
}

function moveBall() {

  // gravity accelerates ball downwards 
  yVelocity += gravity;
  
  // map out the location of the ball after moving
  let nextXCord = xCord + xVelocity;
  let nextYCord = yCord + yVelocity;
  
  // if ball isn't about to run into a border, move ball in straight line
  if(nextXCord > leftBorder && nextXCord < rightBorder && nextYCord > bottomBorder && nextYCord < bottomBorder){
    xCord += xVelocity;
    yCord += yVelocity;
  }
  
  // ball bouncing off left border
  else if(nextXCord <= leftBorder && nextYCord > topBorder && nextYCord < bottomBorder){
    xCord = leftBorder;
    yCord += yVelocity;
    xVelocity = -xVelocity;
  }

  // ball bouncing off bottom border
  else if(nextXCord > leftBorder && nextXCord < rightBorder && nextYCord > bottomBorder){
    xCord += xVelocity;
    yCord =  bottomBorder;
    yVelocity = -yVelocity;
  }
}
