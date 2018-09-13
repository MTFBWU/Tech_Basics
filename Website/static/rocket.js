var direction = 1;

var canvas;

//Rocket
var spaceShip;
var centerY = 600;
var col = 250;

function setup() {
  canvas = createCanvas(300, 850);
  canvas.position(800,0);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

function draw() {
  clear();
  spaceShip();
}

function spaceShip(){

  centerY--;
  if (centerY < -200) {
    centerY = 660;
  }

  //Head of Spaceship
  noStroke();
  fill(255, 77, 77);
  arc(150, centerY, 80, 180, 1 * Math.PI, 0, CHORD);

  //flame
  col = col - 0.4;
  if (col < 0) {
    col = 250;
  }
  noStroke();
  fill(255, 255, 0, col);
  quad(113, centerY + 150, 190, centerY + 150, 230, centerY + 700, 70, centerY + 700);

  //Body of SpaceShip
  fill(220);
  rect(150, centerY + 75, 80, 155);

  //Engine
  for (var i = 100; i < 250; i += 50) {

    fill(255, 77, 77);
    ellipse(i, centerY + 170, 30, 150);
  }

  //Window Frame
  fill(255, 255, 102);
  ellipse(150, centerY + 50, 65, 65);

  //Window Glass
  fill(102, 194, 255);
  ellipse(150, centerY + 50, 50, 50);

}
