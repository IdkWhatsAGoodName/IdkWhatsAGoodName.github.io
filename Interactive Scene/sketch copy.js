// Interactive Scene - Definitely Thermodynamic Bouncy Ball
// Ray Dai
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let bouncy;
let gravity = 0;

let xCord = 0;
let yCord = 0;
// velocity is split into horizontal and vertical vectors
let xVelocity = 0;
let yVelocity = 0;

let leftBorder;
let rightBorder;
let topBorder;
let bottomBorder;

let nextXCord;
let nextYCord;

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
  xCord = windowWidth/2 - bouncy.width/2;
  yCord = windowHeight/2 - bouncy.height/2;

  xVelocity = 10;
  yVelocity = 10;
}


function draw() {
  background(220);
  // move ball
  if(Math.abs(xVelocity) <= windowWidth || Math.abs(yVelocity) <= windowHeight){
    moveBall();
    image(bouncy, xCord, yCord);
    console.log(xVelocity, windowWidth, yVelocity, windowHeight);
  }
}

function moveBall() {
  // gravity accelerates ball downwards 
  yVelocity += gravity;
  
  // map out the location of the ball after moving
  nextXCord = xCord + xVelocity;
  nextYCord = yCord + yVelocity;
  
  // if ball isn't about to run into a border, move ball in straight line
  if(nextXCord > leftBorder && nextXCord < rightBorder && nextYCord > topBorder && nextYCord < bottomBorder){
    xCord += xVelocity;
    yCord += yVelocity;
  }

  // ball bouncing off top border
  else if(nextXCord > leftBorder && nextXCord < rightBorder && nextYCord <= topBorder){
    xCord += xVelocity;
    yCord =  topBorder;
    yVelocity = -1.1 * yVelocity;
  }
  
  // ball bouncing off bottom border
  else if(nextXCord > leftBorder && nextXCord < rightBorder && nextYCord >= bottomBorder){
    xCord += xVelocity;
    yCord =  bottomBorder;
    yVelocity = -1.1 * yVelocity;
  }
  
  // ball bouncing off left border
  else if(nextXCord <= leftBorder && nextYCord > topBorder && nextYCord < bottomBorder){
    xCord = leftBorder;
    yCord += yVelocity;
    xVelocity = -1.1 * xVelocity;
  }
  
  // ball bouncing off right border
  else if(nextXCord >= rightBorder && nextYCord > topBorder && nextYCord < bottomBorder){
    xCord = rightBorder;
    yCord += yVelocity;
    xVelocity = -1.1 * xVelocity;
  }
  
}
