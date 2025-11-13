createCanvas(600, 600);
colorMode(HSB);
noStroke();
background("#ff0000");

let x1 = width / 2;
let y1 = height / 2;

for (let i = 1; i < 60; i++) {
  fill(1 + i, 100, 90);
  circle(x1, y1, (1000 / i) * 6);
}

fill("#012776");
rect(0, height / 2, width, height);

for (let j = 0; j < 150; j++) {
  let hue = map(j, 0, 149, 60, 0);
  stroke(hue, 100, 90);
  let randomlines1 = random(6);
  let randomlines2 = random(8);
  let y = 301 + j * 4;
  let x = width / 2;
  line(x - j * randomlines1, y, x + j * randomlines2, y);
}