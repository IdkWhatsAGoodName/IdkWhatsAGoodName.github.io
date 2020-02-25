// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let bouncy;
let gravity = 0.98;

let x_cord = 0;
let y_cord = 0;
let x_velocity = 0;
let y_velocity = 0;

let left_border;
let right_border;
let top_border;
let bottom_border;

function preload(){
  bouncy = loadImage("assets/bouncy_ball.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x_cord = windowWidth/2 - bouncy.width/2;
  y_cord = windowHeight/2 - bouncy.height/2;
}

function draw() {
  background(220);
  moveBall();
  image(bouncy, x_cord, y_cord);
}

function moveBall() {
  y_velocity += gravity;
  if(x_cord + x_velocity > bouncy.width/2 && x_cord + x_velocity < windowWidth - bouncy.width/2 && y_cord + y_velocity > bouncy.height && y_cord + y_velocity < windowHeight - bouncy.height){
    x_cord += x_velocity;
    y_cord += y_velocity;
  }
  else if(x_cord + x_velocity < bouncy.width/2 && y_cord + y_velocity > bouncy.height/2 && y_cord + y_velocity < windowHeight - bouncy.height){
    x_cord = bouncy.width/2;
    y_cord += y_velocity;
    x_velocity = -x_velocity;
  }
  else if(x_cord + x_velocity > bouncy.width/2 && x_cord + x_velocity < windowWidth - bouncy.width/2 && y_cord + y_velocity > windowHeight - bouncy.height/2){
    x_cord += x_velocity;
    y_cord =  windowHeight - bouncy.height/2;
    y_velocity = -y_velocity;
  }
}
