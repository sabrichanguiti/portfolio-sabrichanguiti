createCanvas(600, 400);
background(0);
textAlign(CENTER, CENTER);
textFont('Consolas');
textSize(12);
colorMode(HSB);

let allChars = "";
for (let i = 0; i < 128; i++) {
  allChars += String.fromCharCode(i);
}

fill(255);
for (let j = 0; j < width; j++) {
  fill(120, 100, random(0, 200));
  for (let i = 0; i < random(height); i++) {
    let r = round(random(0, 128));
    let char = allChars.substring(r, r + 1);
    text(char, 10 * j, i * 7);
  }
}

let x = random(0, width);
let y = random(height / 3);
fill("yellow");
textSize(75);
text('Follow', x, y);

let x2 = random(0, width);
let y2 = random(height / 3, 2 * height / 3);
fill("white");
textSize(75);
text('the white', x2, y2);

let x3 = random(0, width);
let y3 = random(2 * height / 3, height);
fill("yellow");
textSize(75);
text('rabbit', x3, y3);