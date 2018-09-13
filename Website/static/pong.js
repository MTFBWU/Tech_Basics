var circleX, circleY, radius;
var xSpeed, ySpeed;
var rectX, rectY, w, h;
var canvas;

function setup() {
  canvas = createCanvas(1000, 710);
  canvas.position(300, 500);
  rectMode(CENTER);
  circleX = 0;
  circleY = 0;
  radius = 25;
  xSpeed = 5;
  ySpeed = 2.3;
  rectX = 220;
  rectY = 430;
  w = 120;
  h = 20;

}


function draw() {
  clear();
  Ball();
  moveBall();
  Rect();
  rectEdge();
  Edges();

}

// draw the ball and the block
function Ball() {

  fill(255, 232, 0);
  ellipse(circleX, circleY, radius * 2, radius * 2);
}

function Rect() {
  fill(random(255), random(255), random(255));
  rect(rectX, rectY, w, h);
}


function rectEdge() {
  if (circleY + radius > rectY - h / 2) {
    if ((circleX - radius > rectX - w / 2) && (circleX + radius < rectX + w / 2)) {
      ySpeed *= -1;
    }
  }
}

// setting the equation to move the ball
function moveBall() {
  circleX = circleX + 1 * xSpeed;
  circleY = circleY + 1 * ySpeed;
}

//when the ball touches the edges, the ball will bounce back
function Edges() {
  if ((circleX > 500) || (circleX < 0)) {
    xSpeed *= -1
  }
  if ((circleY > 500) || (circleY < 0)) {
    ySpeed *= -1;
  }
}

// drag the mouse to move the block
function mouseDragged() {
  rectX = mouseX;
}
