// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let spell;
function preload(){
  spell = loadImage("assets/Rune Circle.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  image(spell, mouseX, mouseY, 300, 300);
}
