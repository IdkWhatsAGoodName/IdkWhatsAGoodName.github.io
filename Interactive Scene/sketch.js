// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let bouncy
let ball = {
  x_cord: 0,
  y_cord: 0,
  x_velocity: 0,
  y_velocity: 0,
};

function preload(){
  bouncy = loadImage("assets/bouncy_ball.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ball.x_cord = windowWidth/2 - bouncy.width/2;
  ball.y_cord = windowHeight/2 - bouncy.height/2;
}

function draw() {
  background(220);
  image(bouncy, ball.x_cord, ball.y_cord);
}
