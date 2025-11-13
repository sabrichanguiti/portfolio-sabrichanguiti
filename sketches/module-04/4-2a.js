createCanvas(200, 200);
colorMode(HSB);
noStroke();
background(0, 0, 10);

let randomShape = floor(random(0, 3));
let x = width / 2;
let y = height / 2;
fill(330, 90, 100);

switch (randomShape) {
    case 0:
        triangle(x - 50, y - 50, x + 50, y + 50, x - 50, y + 50);
        break;
    case 1:
        rect(x - 50, y - 50, 100, 100);
        break;
    case 2:
        circle(x, y, 100);
        break;

}
