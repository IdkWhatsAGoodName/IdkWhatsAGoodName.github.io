// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let spell;
let scalar = 1.0;
function preload(){
  spell = loadImage("assets/Rune Circle.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  image(spell, mouseX-0.5*scalar*spell.width, mouseY-0.5*scalar*spell.height, scalar*spell.width, scalar*spell.height);
}

function mouseWheel(event){
  if(event.delta < 0){
    scalar *= 1.1;
  }
  else if(event.delta > 0){
    scalar *= 0.9;
  }
}