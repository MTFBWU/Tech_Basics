var x = [];
var y = [];
var d = [];
var short = 99999;
var canvas;


function setup() {
  canvas = createCanvas(800, 400);
  canvas.position(300, 300);

  textAlign(CENTER, CENTER);
  textSize(15);

  for (var i = 0; i < 19; i++) {
    x[i] = random(width);
    y[i] = random(height);
  }
}

function draw() {
  clear();
  short = 999999;

  for (var i = 0; i < 19; i++) {

    stroke(0);
    fill(255, 100,0,100);

    d[i] = dist(x[i], y[i], mouseX, mouseY);

    if (d[i] < short) {
      short = d[i];
    }

    fill(0);
    text(d[i].toFixed(1), x[i], y[i] + 30);
    stroke(125);
  }

  for (var i = 0; i < 19; i++) {

    fill(255,255,0,100);
    stroke(0);

    if (d[i] == short) {

      fill(255, 0, 0,100);
      stroke(255, 0, 0);

    }

    ellipse(x[i], y[i], 40, 40);
    line(mouseX, mouseY, x[i], y[i]);

  }

}
