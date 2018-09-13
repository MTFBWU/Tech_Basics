var y = [50, 150, 250, 350, 450];
var x = [0, 200, 0, 200, 0];
var num = [0, 0, 0, 0, 0];
var dir = [1, 1, 1, 1, 1];
var spd = [1, 1, 1, 1, 1];
var check = 0;
var most = 0;
var canvas;

function setup() {
  canvas = createCanvas(1000, 610);
  canvas.position(200, 300);
}

function draw() {

  clear();
  noStroke();
  spd[i] = random(1, 3);
  for (var i = 0; i < 5; i++) {
    x[i] = x[i] + spd[i] * dir[i];

    if (x[i] > width || x[i] < 0) {
      spd[i] = random(1, 3);
      dir[i] *= -1;
      num[i]++;
    }

    if (num[i] > check) {
      check = num[i];
    }
  }

  for (var i = 0; i < 5; i++) {

    if (num[i] == check && num[i] != 0) {
      fill(random(200), random(255), random(255), 100);
    } else {
      fill(255, 255, 0, 150);
    }
    ellipse(x[i], y[i], 50, 50);

  }
}
